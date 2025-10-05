import ProjectRow from "@/components/modules/Project/ProjectRow"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IProject } from "@/types"


export default async function ManagepProjectPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        cache : "no-store"
    })

    const {data : projects} =await res.json()

    


    return (
     <div className="w-full max-w-4xl mx-auto px-5 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Project Management</h1>
      </div>

      <div className="border border-muted rounded-md shadow-sm bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="text-center">Update</TableHead>
              <TableHead className="text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project: IProject) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    )
}



