"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export async function createBlogServerAction(formData: FormData) {
  const blogInfo = Object.fromEntries(formData.entries());
  const modifiedData = {
    ...blogInfo,
    tags: blogInfo.tags.toString().split(",").map((tag) => tag.trim()),
    isFeatured: Boolean(blogInfo.isFeatured),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result?.id) {
      revalidateTag("BLOG")
    revalidatePath("/blogs"); 
    redirect("/")
  }

  return result;
}


