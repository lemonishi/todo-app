import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import TypoP from "./typography/TypoP";
import TodoForm from "./TodoForm";

function AddTodo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <TypoP text="Add" />
          <Plus className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>I want to...</DialogTitle>
          <DialogDescription>Create a new thing to do.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label
              htmlFor="link"
              className="sr-only"
            ></Label>
            <TodoForm />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddTodo;
