"use client";

import { AdminLayout } from "@/_components/layout/AdminLayout";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const OrdersPage = () => {
  // const [date, setDate] = React.useState<Date | undefined>(
  //   new Date(2025, 5, 12)
  // );
  return (
    <div className="bg-gray-100 max-w-full h-screen inter">
      <AdminLayout>
        <div className="flex gap-6">
          <Table className="bg-background rounded-lg border-lg border-[#E4E4E7]">
            <TableHeader>
              <TableRow className="p-4 flex justify-between">
                <TableHead className=" text-foreground text-5 leading-7 font-[700]">
                  Orders
                  <p className="text-muted-foreground text-3 leading-4 font-[500]">
                    32 items
                  </p>
                </TableHead>
                <div>
                  <TableHead>
                    <div>
                      {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Input type="date" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start"> */}
                      {/* <Calendar
                        mode="single"
                        defaultMonth={date}
                        numberOfMonths={2}
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border shadow-sm"
                      /> */}
                      {/* </DropdownMenuContent>
                      </DropdownMenu> */}
                      <Input type="date" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <Button className="rounded-full px-2 py-4 text-[14px] leading-5 font-[500]">
                      Change delivery state
                    </Button>
                  </TableHead>
                </div>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </AdminLayout>
    </div>
  );
};

export default OrdersPage;
