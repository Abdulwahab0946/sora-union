"use client";
import Card from "@/components/Card";
import DropDown from "@/components/DropDown";
import { csvParser } from "@/server-actions/csvParser";
import { CREATED_AT, FileData, Sort, SortBy } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  //Fetch Items.
  const [data, setData] = useState<FileData[]>([]);
  const [sortBy, setSortBy] = useState<Sort>(CREATED_AT);

  useEffect(() => {
    (async () => {
      const response = (await csvParser(
        sortBy as unknown as SortBy
      )) as FileData[];
      console.log("response:", response);
      setData(response);
    })();
  }, [sortBy]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center">
        <DropDown onChange={(value) => setSortBy(value)} sortValue={sortBy} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data?.map((item, ind) => (
          <Card key={ind} {...item} />
        ))}
      </div>
    </div>
  );
}
