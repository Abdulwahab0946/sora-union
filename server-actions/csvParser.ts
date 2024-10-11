"use server";

import { parseCSV, sortList } from "@/helpers/helper";
import { FileData, SortBy } from "@/types";

export async function csvParser(sortBy: SortBy) {
  let result: FileData[] = [];

  const filepath = process.cwd() + "/data.csv";
  try {
    result = (await parseCSV(filepath)) as FileData[];
    const sortedItems = sortList(result, sortBy) as FileData[];
    return sortedItems;
  } catch (err) {
    console.error("Error parsing CSV:", err);
    throw err;
  }
}
