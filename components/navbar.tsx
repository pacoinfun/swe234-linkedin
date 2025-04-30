'use client'

import Link from "next/link"
import Image from "next/image"
import { Search, Home, Users, Briefcase, MessageSquare, Bell } from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
        <div className="w-1/4 flex items-center">
          <Link href="/">
            <Image 
              src="/LinkedIn-Logo.wine.svg" 
              alt="LinkedIn" 
              width={200} 
              height={50} 
              className="h-28 w-auto"
              priority
            />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <nav className="flex items-center">
            <div className="flex items-center justify-center gap-8 md:gap-10">
              <NavItem icon={<Home className="h-6 w-6" />} active />
              <NavItem icon={<Users className="h-6 w-6" />} />
              <NavItem icon={<Briefcase className="h-6 w-6" />} />
              <NavItem icon={<MessageSquare className="h-6 w-6" />} badge="6" />
              <NavItem icon={<Bell className="h-6 w-6" />} badge="9" />
              <NavItem
                icon={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/emre.jpg" alt="Profile" />
                    <AvatarFallback>ET</AvatarFallback>
                  </Avatar>
                }
              />
            </div>
          </nav>
        </div>
        
        <div className="w-1/4 flex items-center justify-end">
          <div className="relative hidden md:block mr-3">
            <Input 
              className="pl-9 bg-muted dark:bg-muted/70 border-none rounded-md w-64" 
              placeholder="Search for anything"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="flex items-center">
            <ModeToggle />
          </div>
          
          <div className="md:hidden flex items-center ml-auto">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavItem({ icon, active, badge }: {
  icon: React.ReactNode
  active?: boolean
  badge?: string
}) {
  return (
    <div
      className={`flex items-center justify-center p-2 relative ${
        active ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground transition-colors"
      }`}
    >
      <div className="relative">
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
    </div>
  )
} 