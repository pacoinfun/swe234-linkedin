'use client'

import { useState } from "react"
import { Search, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MessagesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMessages = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="bg-card rounded-t-lg border shadow-lg w-64">
      <div className="p-3 border-b flex items-center justify-between cursor-pointer" onClick={toggleMessages}>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <span className="font-medium">Messages</span>
          <Badge variant="destructive" className="rounded-full text-xs">
            6
          </Badge>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </Button>
      </div>
      
      {isOpen && (
        <div className="max-h-96 overflow-y-auto">
          <div className="p-3 border-b">
            <div className="relative mb-2">
              <Input 
                className="pl-9 pr-4 py-1 h-8 text-sm rounded-full" 
                placeholder="Search messages" 
              />
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <MessageItem 
            name="Ryan Roslansky" 
            avatar="/linkedin ceo.png" 
            message="Hey, I saw your profile. Do you want to join our team?" 
            time="2m" 
            unread
          />
          
          <MessageItem 
            name="Steve Jobs" 
            avatar="/apple ceo.png" 
            message="I have a revolutionary idea to discuss with you" 
            time="1h"
          />
          
          <MessageItem 
            name="Dylan Field" 
            avatar="/figma ceo.png" 
            message="Can you review this design I made?" 
            time="5h"
          />
          
          <div className="p-3 text-center">
            <Button variant="ghost" className="text-primary text-sm">See all in Messaging</Button>
          </div>
        </div>
      )}
    </div>
  );
}

interface MessageItemProps {
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread?: boolean;
}

function MessageItem({ name, avatar, message, time, unread }: MessageItemProps) {
  return (
    <div className={`p-3 flex items-start gap-3 hover:bg-muted cursor-pointer ${unread ? 'bg-primary/5' : ''}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm truncate ${unread ? 'font-semibold' : 'font-medium'}`}>{name}</h4>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className={`text-xs truncate ${unread ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
          {message}
        </p>
      </div>
    </div>
  );
} 