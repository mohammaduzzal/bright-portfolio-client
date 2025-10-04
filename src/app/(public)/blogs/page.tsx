import BlogCard from "@/components/modules/Blog/BlogCard"
import { IBlog } from "@/types"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : "All Blogs | Bright Portfolio",
    description: "Learn more about technology, education and skills in blogs page."

}


export default async function BlogsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        cache : "no-store"
    })
    

    const {data : blogs} = await res.json()
    

    return (
          <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto my-5">
              {
                blogs.map((blog : IBlog) => <BlogCard key={blog.id} blog={blog}/>)
              }
            </div>
    </div>
    )
}