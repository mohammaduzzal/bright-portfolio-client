
import BlogRow from "@/components/modules/Blog/BlogRow"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IBlog } from "@/types"

export default async function ManageBlogPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        cache : "no-store"
    })

    const {data : blogs} =await res.json()

    


    return (
     <div className="w-full max-w-4xl mx-auto px-5 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Blog Management</h1>
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
            {blogs.map((blog: IBlog) => (
              <BlogRow key={blog.id} blog={blog} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    )
}


