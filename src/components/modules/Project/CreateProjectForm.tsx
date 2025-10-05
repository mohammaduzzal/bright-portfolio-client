"use client"

import { createProjectServerAction } from '@/actions/projectAction'
import Form from 'next/form'
import { useState } from 'react';


export default function CreateProjectForm() {
      const [isSubmitting, setIsSubmitting] = useState(false);

    return (
         <Form
         action={createProjectServerAction}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>

      {/* name */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* image */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* TackStack */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          TechStack (comma separated)
        </label>
        <input
          type="text"
          id="techStack"
          name="techStack"
          placeholder="Next.js, React, Web Development"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>
      {/* github link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          GithubLink (comma separated)
        </label>
        <input
          type="text"
          id="githubLink"
          name="githubLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>
       {/* liveLink */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          LiveLink
        </label>
        <input
          type="text"
          id="liveLink"
          name="liveLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>
       {/* challenges */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Challenges
        </label>
        <input
          type="text"
          id="challenges"
          name="challenges"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>
       {/* futureImprovements */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          FutureImprovements
        </label>
        <input
          type="text"
          id="futureImprovements"
          name="futureImprovements"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
          required
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
       {isSubmitting ? "Submitting..." : "Create Project"}
      </button>
    </Form>
    )
}


