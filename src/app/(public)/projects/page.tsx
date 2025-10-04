import ProjectCard from "@/components/modules/Project/ProjectCard"
import { IProject } from "@/types"
import { Metadata } from "next"

export const metadata : Metadata = {
  title : "All Projects | Bright Portfolio",
    description: "here i provides projects that i worked on."

}


export default async function ProjectsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
        next :{
          revalidate : 10
        }
    })
    

    const {data : projects} = await res.json()
    

    return (
          <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Projects</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto my-5">
              {
                projects.map((project : IProject) => <ProjectCard key={project.id} project={project}/>)
               }
            </div>
    </div>
    )
}