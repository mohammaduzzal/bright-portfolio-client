import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard"
import { getBlogById } from "@/services/blogService"
import { IBlog } from "@/types"


export const generateStaticParams = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
    const {data : blogs} = await res.json()

    return blogs.slice(0,2).map((blog : IBlog) =>({
      blogId : String(blog.id)
    }))

}


export const revalidate = 30;
export const generateMetadata = async({params} : {params : Promise<{blogId : string}>}) =>{
  const {blogId} = await params

   const blog = await getBlogById(blogId)

    return {
    title: blog?.title || "Blog Details",
    description: blog?.content?.slice(0, 150) || "Read the full article on Bright’s blog.",
  };
}

export default async function BlogDetailsPage({params} : {params : Promise<{blogId : string}>}) {

    const {blogId} = await params

    const blog = await getBlogById(blogId)
    

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto ">
        <BlogDetailsCard blog={blog}/>

    </div>
  )
}