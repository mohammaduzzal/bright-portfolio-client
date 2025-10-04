import BlogCard from "@/components/modules/Blog/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import ProjectCard from "@/components/modules/Project/ProjectCard";
import { IBlog, IProject } from "@/types";

export default async function HomePage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        next: {
            tags: ["BLOG"]
        }
    })

    const { data: blogs } = await res.json()

    const featuredBlogs = blogs.filter((blog: IBlog) => blog.isFeatured === true)
        .slice(0, 3)


        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next: {
            tags: ["PROJECT"]
        }
    })

    const {data : projects} = await result.json()



    return (<div>
        <Hero />
        {/* blog */}
        <div className="my-15 w-11/12 mx-auto p-2">
            <h2 className="text-center my-5 text-2xl md:text-4xl">Featured Blogs</h2>
            {featuredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {featuredBlogs.map((blog: IBlog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No featured blogs found.</p>
            )}
        </div>
        {/* project */}
        <div className="my-15 w-11/12 mx-auto p-2">
            <h2 className="text-center my-5 text-2xl md:text-4xl">Featured Projects</h2>
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {projects.slice(0,3).map((project: IProject) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
    
        </div>
    </div >)
}


