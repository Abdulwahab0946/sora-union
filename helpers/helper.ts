import {
  CREATED_AT,
  FILE_NAME_ASC,
  FILE_NAME_DESC,
  FileData,
  SortBy,
} from "@/types";
import csv from "csv-parser";

import * as fs from "fs";

export async function parseCSV(filePath: string) {
  return new Promise((resolve, reject) => {
    const parsingResult: FileData[] = [];

    fs.createReadStream(filePath)
      .pipe(csv({ headers: false, separator: ";" }))
      .on("data", (row) =>
        parsingResult.push({
          createdAt: Object.values(row)[0] as string,
          fileName: Object.values(row)[1] as string,
        })
      )
      .on("end", () => resolve(parsingResult))
      .on("error", (error) => reject(error));
    console.log("File Read: ", parsingResult);
  });
}

export function sortList(list: FileData[], sortBy?: SortBy) {
  switch (sortBy) {
    case CREATED_AT as unknown as SortBy.CREATED_AT:
      return list.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt, undefined, {
          numeric: true,
        })
      );

    case FILE_NAME_ASC as unknown as SortBy.FILE_NAME_ASC:
      return list.sort((a, b) =>
        a.fileName.localeCompare(b.fileName, undefined, { numeric: true })
      );

    case FILE_NAME_DESC as unknown as SortBy.FILE_NAME_DESC:
      return list.sort((a, b) =>
        b.fileName.localeCompare(a.fileName, undefined, { numeric: true })
      );

    default:
      return list;
  }
}
