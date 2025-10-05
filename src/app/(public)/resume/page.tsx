import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : "Resume | Bright Portfolio",
    description: "Learn more about Bright, education and skills."

}

export default function ResumePage() {
  
    return (

        <section className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>

      {/* Work Experience */}
      {/* <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Work Experience</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">April - Present</p>
              <h4 className="font-semibold">Executive at Admin & Procurement</h4>
              <p className="text-sm text-muted-foreground">
                Germania Corporation Limited
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">
                June 2022 - March 2024
              </p>
              <h4 className="font-semibold">Web Developer (Remotely)</h4>
              <p className="text-sm text-muted-foreground">AFRO Group</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">May 2020 - Aug 2020</p>
              <h4 className="font-semibold">Teaching Assistant</h4>
              <p className="text-sm text-muted-foreground">
                American International University - Bangladesh
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Education */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-pink-50">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">2022</p>
              <h4 className="font-semibold">MSS in Political Science</h4>
              <p className="text-sm text-muted-foreground">
                National University - Bangladesh
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-100">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">2021</p>
              <h4 className="font-semibold">BSS in Political Science</h4>
              <p className="text-sm text-muted-foreground">
                National University - Bangladesh
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-50">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">2017</p>
              <h4 className="font-semibold">HSC in Arts</h4>
              <p className="text-sm text-muted-foreground">
                Nimgachi Degree College
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "PostgreSQL",
            "SQL",
            "Prisma",
            "Firebase",
            "Tailwind CSS",
            "TypeScript",
            "Redux",
            "Shadcn/ui",
            "Vercel",
            "Git",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-3 py-1 text-sm rounded-md"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
    )
}

 
