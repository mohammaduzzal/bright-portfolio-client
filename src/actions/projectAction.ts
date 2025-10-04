"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export async function createProjectServerAction(formData: FormData) {
   
  const projectInfo = Object.fromEntries(formData.entries());
  const modifiedData = {
    ...projectInfo,
    techStack : projectInfo.techStack.toString().split(",").map((teck) => teck.trim()),
    githubLink : projectInfo.githubLink.toString().split(",").map((git) => git.trim()),
    
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.id) {
      revalidateTag("PROJECT")
    revalidatePath("/projects"); 
    redirect("/")
  }

  return result;
}
