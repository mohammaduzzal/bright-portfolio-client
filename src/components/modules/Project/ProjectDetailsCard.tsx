/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetailsCard({ project }: { project: IProject }) {

  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        {project.name}
      </h1>

      {/* Project Image */}
      {project.image && (
        <div className="relative h-80 w-full mb-8 overflow-hidden rounded-xl shadow-md">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project?.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Description */}
      <article className="prose prose-lg max-w-none dark:prose-invert mb-10">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </article>

      {/* Challenges */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Challenges Faced</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.challenges}
        </p>
      </section>

      {/* Future Improvements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.futureImprovements}
        </p>
      </section>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-4">
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
             Live Site
          </Link>
        )}

        {project.githubLink.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.githubLink.map((link, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="px-5 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                 GitHub {project.githubLink.length > 1 ? index + 1 : ""}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
