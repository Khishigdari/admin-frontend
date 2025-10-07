import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const AddCategoryDialogComp = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Badge className="py-2 px-4 rounded-full bg-[#EF4444] cursor-pointer">
            {/* <Plus className="w-2.5 h-2.5" /> */}
            <p className="text-[14px] leading-5">+</p>
          </Badge>
        </DialogTrigger>
        <DialogContent className="w-[460px] p-6">
          <DialogHeader>
            <DialogTitle className="text-[18px] leading-7 font-semibold mb-6">
              Add new category
            </DialogTitle>
            <Label className="mb-2 text-[14px] leading-[14px] font-medium">
              Category name
            </Label>
            <Input placeholder="Type category name..." />
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-fit mt-6 leading-5" type="submit">
                Add category
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
