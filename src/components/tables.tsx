import { cn, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { ReactNode } from "react";

export function STable({
  head,
  data,
  empty,
  loadingContent,
  isLoading,
}: {
  head: ReactNode[];
  data: ReactNode[][];
  empty?: ReactNode;
  loadingContent?: ReactNode;
  isLoading?: boolean;
}) {
  return (
    <Table removeWrapper className={cn("overflow-auto pb-3")}>
      <TableHeader className="p-0">
        {head.map((h, i) => (
          <TableColumn className="bg-transparent py-0 h-6 whitespace-nowrap text-sm font-normal text-white" key={i}>
            {h}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={empty} loadingContent={loadingContent} isLoading={isLoading}>
        {data.map((item, ri) => (
          <>
            <TableRow className="opacity-0 h-3 p-0" key={`space_${ri}`}>
              {item.map((_cell, ci) => (
                <TableCell className="p-0 leading-3" key={ci}>
                  s
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="mt-5" key={ri}>
              {item.map((cell, ci) => (
                <TableCell
                  className={cn("bg-white/10 h-[50px] whitespace-nowrap text-xs text-white/80", { "rounded-l-lg": ci == 0, "rounded-r-lg": ci == item.length - 1 })}
                  key={ci}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
}
