import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import NavMenu from "./nav-menu"


export default function NavigationSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu/>
              </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                PORTFOLIO
                <NavMenu orientation="vertical" className="mt-12"/>
                </SheetTitle>
            </SheetContent>
        </Sheet>
    )
}


