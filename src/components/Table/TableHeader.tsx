import clsx from "clsx";

import { ITableColumn } from "./Table.types";

interface TableHeaderProps {
  tableHead: ITableColumn[];
  className?: string;
}

const TableHeader = ({ tableHead, className }: TableHeaderProps) => {
  return (
    <thead className="rounded-t text-left border border-[#c5e7f2]">
      <tr className="bg-cyan-100">
        {tableHead.map((head, index) => (
          <th
            key={index}
            className={clsx(
              "p-[14px] first:pl-[24px] last:pr-[24px] leading-[27px] ",
              "text-[#311339] text-[13px] font-bold uppercase",
              className
            )}
          >
            {head.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
