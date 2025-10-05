"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableCell, TableRow } from "@/components/ui/table";
import { IBlog, IProject } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ProjectRow({ project }: { project: IProject }) {

    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [name, setName] = useState(project.name);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate =async() =>{

        setIsUpdating(true)

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${project.id}`,{
                method : "PATCH",
                headers :{
                     "Content-Type": "application/json",
                },
                body : JSON.stringify({name})
            })

            if(res.ok){
                toast.success("project updated successfully!")
                setOpen(false)
                router.refresh()
              
            }else{
                toast.error("Failed to update project.")
            }
            
        } catch (error) {
            console.error(error)
            toast.error("Error while updating project.")
        }finally{
            setIsUpdating(false)
        }
    }

    const handleDelete = async () => {
  toast("Are you sure you want to delete this blog?", {
    description: project.name,
    action: {
      label: "Delete",
      onClick: async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${project.id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            toast.success("project deleted successfully!");
            router.refresh()
          } else {
            toast.error("Failed to delete project.");
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
      <TableCell className="font-medium">{project.name}</TableCell>

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
              <DialogTitle>Update Project</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Name</Label>
                <Input
                  id="title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={project.name}
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