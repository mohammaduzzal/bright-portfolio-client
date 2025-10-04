/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/types";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block group transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {project.image ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
            No Image
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>

          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              view details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
