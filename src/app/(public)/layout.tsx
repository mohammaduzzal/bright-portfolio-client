import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
          <Navbar/>
          <main className="min-h-dvh">{children}</main>
        </div>
    )
}
