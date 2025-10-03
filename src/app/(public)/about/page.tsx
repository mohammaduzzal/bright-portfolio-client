import Image from "next/image";
import bright from "../../../../public/b.jpg";
import { Calendar, Code, Dumbbell, Mail, MapPin, Phone, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : "About | Bright Portfolio",
    description: "Learn more about Bright, a passionate frontend developer skilled in React, Next.js, and modern web technologies, dedicated to crafting user-friendly digital experiences."

}

export default function AboutPage() {
  

    return (
   <section className="w-11/12 mx-auto my-10">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={bright} 
            alt="Profile"
            width={250}
            height={250}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Bio + Personal Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Who am I?</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a passionate and results-driven full stack MERN 
            developer.I am dedicated to
            creating innovative and efficient solutions that meet the needs of businesses
            and users. I thrive in collaborative environments and enjoy working with
            cross-functional teams to deliver high-quality products.
          </p>

          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+880179198041</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sirajgonj, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>aalp72142@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>18 Sep, 1999</span>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <h3 className="text-2xl font-semibold mt-12 mb-6">What I do!</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Code className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold mb-2">Web Development</h4>
            <p className="text-muted-foreground text-sm">
              I craft dynamic and user-friendly applications using a MERN stack. Passionate
              about creating seamless digital experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Plane className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold mb-2">Traveling</h4>
            <p className="text-muted-foreground text-sm">
              I find inspiration in exploring new places and experiencing diverse cultures.
              Traveling fuels my creativity and broadens my perspective.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Dumbbell className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold mb-2">Sporting</h4>
            <p className="text-muted-foreground text-sm">
              Whether on the field or cheering from the sidelines, I embrace the energy and
              camaraderie of sports — a lifestyle that enhances focus and teamwork.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
    )
}

 
