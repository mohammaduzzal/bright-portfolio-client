import { IBlog } from "@/types";
import Image from "next/image";

export default async function BlogDetailsCard({ blog }: { blog: IBlog }) {
   
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-30 px-4">
      <h1 className="text-5xl font-bold mb-6">{blog?.title}</h1>

      <div className="flex items-center gap-4 mb-8">
    
        <div>
      
          <p className="text-gray-500 text-sm">
            {new Date(blog?.createdAt).toLocaleDateString()} • {blog?.views} views
          </p>
        </div>
      </div>

      {blog.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <p>{blog?.content}</p>
      </article>
    </main>
  );
}
