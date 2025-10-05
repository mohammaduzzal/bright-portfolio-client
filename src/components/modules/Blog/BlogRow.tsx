"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableCell, TableRow } from "@/components/ui/table";
import { IBlog } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function BlogRow({ blog }: { blog: IBlog }) {

    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(blog.title);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate =async() =>{

        setIsUpdating(true)

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blog.id}`,{
                method : "PATCH",
                headers :{
                     "Content-Type": "application/json",
                },
                body : JSON.stringify({title})
            })

            if(res.ok){
                toast.success("Blog updated successfully!")
                setOpen(false)
                router.refresh()
              
            }else{
                toast.error("Failed to update blog.")
            }
            
        } catch (error) {
            console.error(error)
            toast.error("Error while updating blog.")
        }finally{
            setIsUpdating(false)
        }
    }

    const handleDelete = async () => {
  toast("Are you sure you want to delete this blog?", {
    description: blog.title,
    action: {
      label: "Delete",
      onClick: async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blog.id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            toast.success("Blog deleted successfully!");
            router.refresh()
          } else {
            toast.error("Failed to delete blog.");
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong while deleting.");
        }
      },
    },
  });
};



    return (
          <TableRow>
      <TableCell className="font-medium">{blog.title}</TableCell>

      {/* Update Modal */}
      <TableCell className="text-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Update
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Update Blog</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter updated title"
                  required
                />
              </div>

              <Button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="mt-2"
              >
                {isUpdating ? "Updating..." : "Save Changes"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>

      {/* Delete Button */}
      <TableCell className="text-center">
        <Button variant="destructive" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
    )
}