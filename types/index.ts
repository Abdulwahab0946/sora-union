//Constants

export const CREATED_AT = "createdAt";
export const FILE_NAME_ASC = "fileNameAsc";
export const FILE_NAME_DESC = "fileNameDesc";

export const DropdownOptions = [
  {
    value: CREATED_AT,
    label: "Created At",
  },
  {
    value: FILE_NAME_ASC,
    label: "Filename ASC",
  },
  {
    value: FILE_NAME_DESC,
    label: "Filename DESC",
  },
];

// Interfaces for file

export interface FileData {
  createdAt: string;
  fileName: string;
}

export type Sort =
  | typeof CREATED_AT
  | typeof FILE_NAME_ASC
  | typeof FILE_NAME_DESC;

export enum SortBy {
  CREATED_AT,
  FILE_NAME_ASC,
  FILE_NAME_DESC,
}

export interface DropDownData {
  onChange: (value: Sort) => void;
  sortValue: Sort;
}
