import Image from "next/image"
import React from "react"
import {
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Plus,
  Play,
  Calendar,
  FileText,
  Send,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessagesPanel } from "@/components/messages-panel"

export default function LinkedInInterface() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="md:col-span-3 space-y-4">
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="flex flex-col items-center pt-4 pb-2 border-b">
              <div className="w-full h-12 bg-muted flex justify-center items-center">
                <Image
                  src="/placeholder.svg?height=48&width=180"
                  width={180}
                  height={48}
                  alt="University logo"
                  className="h-8 object-contain"
                />
              </div>
              <Avatar className="w-16 h-16 border-4 border-background -mt-8">
                <AvatarImage src="/emre.jpg" alt="Profile" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <div className="text-center mt-2">
                <h3 className="font-medium flex items-center justify-center gap-1">
                  Emre Tosman
                  <span className="text-[#d3bd7e]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                      <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                      <path d="M8 7l3 3h-2v2H7v-2H5l3-3z"></path>
                    </svg>
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground">Software Developer</p>
              </div>
              <div className="w-full mt-2 px-3">
                <div className="flex items-center justify-between text-xs">
                  <span>Profile strength</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="w-full bg-muted h-1.5 rounded-full mt-1">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
            <div className="p-3 flex items-center gap-2 text-sm">
              <Plus className="h-4 w-4" />
              <span>Add another account</span>
            </div>
          </div>

          <nav className="bg-card rounded-lg border">
            <SidebarItem icon={<Play className="h-5 w-5" />} label="Learning" />
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              }
              label="Insights"
            />
            <SidebarItem icon={<Users className="h-5 w-5" />} label="Find colleagues" />
            <SidebarItem icon={<Bookmark className="h-5 w-5" />} label="Bookmarks" />
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2v6.5l3-3"></path>
                  <path d="M12 2v6.5l-3-3"></path>
                  <path d="M7 10.5v4.5a5 5 0 0 0 10 0v-4.5"></path>
                  <path d="M12 18v4"></path>
                  <path d="M8 22h8"></path>
                </svg>
              }
              label="Games"
              badge="New"
            />
            <SidebarItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              }
              label="Settings"
            />
          </nav>

          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-medium uppercase">Followed Hashtags</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <HashTag tag="work" />
              <HashTag tag="business" />
              <HashTag tag="hr" />
              <HashTag tag="userinterface" />
              <HashTag tag="digital" />
              <HashTag tag="userexperience" />
              <HashTag tag="ux" />
              <HashTag tag="ui" />
              <HashTag tag="freelance" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-4">
          {/* Create Post */}
          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/emre.jpg" alt="Profile" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="w-full justify-start text-muted-foreground font-normal rounded-full">
                Write something...
              </Button>
            </div>
            <div className="flex items-center justify-between mt-3">
              <Button variant="ghost" className="text-xs flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                Photo
              </Button>
              <Button variant="ghost" className="text-xs flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Video
              </Button>
              <Button variant="ghost" className="text-xs flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event
              </Button>
              <Button variant="ghost" className="text-xs flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Article
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Send className="h-5 w-5 rotate-45" />
              </Button>
            </div>
          </div>

          {/* First Post */}
          <div className="bg-card rounded-lg border">
            <div className="p-4 flex items-start gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/emre.jpg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-medium">Emre Tosman</h3>
                      <span className="text-[#d3bd7e]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                          <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                          <path d="M8 7l3 3h-2v2H7v-2H5l3-3z"></path>
                        </svg>
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Software Developer</p>
                    <p className="text-xs text-muted-foreground">5h ago</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
                <p className="mt-2">Healthy Tracking App</p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/post emre.png"
                  width={600}
                  height={400}
                  alt="Healthy Tracking App"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <ThumbsUp className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/emre.jpg" alt="Profile" />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                  <Input className="rounded-full pl-4 pr-10 py-1 h-8 text-sm" placeholder="Write a comment" />
                  <div className="absolute right-3 top-1.5 flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="bg-card rounded-lg border">
            <div className="p-4 flex items-start gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/priscilla.jpg" alt="Profile" />
                <AvatarFallback>PO</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-medium">Priscilla Olawale</h3>
                      <span className="text-[#d3bd7e]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                          <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                          <path d="M8 7l3 3h-2v2H7v-2H5l3-3z"></path>
                        </svg>
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Best Teacher in the World</p>
                    <p className="text-xs text-muted-foreground">2h ago</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
                <p className="mt-2">Photo is perfect</p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/post priscilla.png"
                  width={600}
                  height={400}
                  alt="Priscilla's Photo"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <ThumbsUp className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/priscilla.jpg" alt="Profile" />
                  <AvatarFallback>PO</AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                  <Input className="rounded-full pl-4 pr-10 py-1 h-8 text-sm" placeholder="Write a comment" />
                  <div className="absolute right-3 top-1.5 flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="md:col-span-3 space-y-4">
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="bg-primary/10 p-4 text-center">
              <Image
                src="/premium.png"
                alt="LinkedIn Premium"
                width={300}
                height={150}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium mb-3">People you may know:</h3>
            <div className="space-y-4">
              <PeopleCard name="Steve Jobs" title="CEO of Apple" />
              <PeopleCard name="Ryan Roslansky" title="CEO of LinkedIn" />
              <PeopleCard name="Dylan Field" title="CEO of Figma" />
              <div className="text-sm text-primary font-medium text-center mt-4">See All</div>
            </div>
          </div>

          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#f7df1e] w-10 h-10 flex items-center justify-center text-black font-bold">JS</div>
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white font-bold">Py</div>
              <div className="flex items-center justify-between flex-1">
                <span className="font-medium">Python</span>
                <Badge variant="destructive" className="rounded-full text-xs">
                  +99
                </Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-2 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add new page
            </Button>
          </div>
        </aside>
      </main>

      {/* Messages */}
      <div className="fixed bottom-0 right-6 z-10">
        <MessagesPanel />
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}

function SidebarItem({ icon, label, badge }: SidebarItemProps) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-muted cursor-pointer">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      {badge && <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">{badge}</span>}
    </div>
  )
}

interface HashTagProps {
  tag: string;
}

function HashTag({ tag }: HashTagProps) {
  return <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">#{tag}</span>
}

interface PeopleCardProps {
  name: string;
  title: string;
}

function PeopleCard({ name, title }: PeopleCardProps) {
  let avatarSrc = "/placeholder.svg?height=40&width=40";
  
  if (name === "Ryan Roslansky") {
    avatarSrc = "/linkedin ceo.png";
  } else if (name === "Steve Jobs") {
    avatarSrc = "/apple ceo.png";
  } else if (name === "Dylan Field") {
    avatarSrc = "/figma ceo.png";
  } else if (name === "Priscilla Olawale") {
    avatarSrc = "/priscilla.jpg";
  } else if (name === "Emre Tosman") {
    avatarSrc = "/emre.jpg";
  }
  
  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-medium text-sm">{name}</h4>
        <p className="text-xs text-muted-foreground">{title}</p>
      </div>
      <Button variant="outline" className="h-8 text-xs text-primary border-primary hover:bg-primary/10">
        Connect
      </Button>
    </div>
  )
}
