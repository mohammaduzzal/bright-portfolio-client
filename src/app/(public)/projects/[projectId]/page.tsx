import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard"
import ProjectDetailsCard from "@/components/modules/Project/ProjectDetailsCard"
import { getBlogById } from "@/services/blogService"
import { getProjectById } from "@/services/projectService"
import { IProject } from "@/types"


export const generateStaticParams = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`)
    const {data : projects} = await res.json()

    return projects.slice(0,2).map((project : IProject) =>({
      projectId : String(project.id)
    }))

}



export const generateMetadata = async({params} : {params : Promise<{projectId : string}>}) =>{
  const {projectId} = await params

   const project = await getBlogById(projectId)

    return{
      title : project?.name ,
      description : project?.description
    }
}

export default async function ProjectDetailsPage({params} : {params : Promise<{projectId : string}>}) {

    const {projectId} = await params

    const project = await getProjectById(projectId)
    
    

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto ">
        <ProjectDetailsCard project={project}/>

    </div>
  )
}