export const getProjectById = async(projectId :string) =>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,{
        next :{
            revalidate : 30
        }
     })
    return await res.json()
}