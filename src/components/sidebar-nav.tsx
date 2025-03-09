import Link from "next/link"
import { BarChart, BookOpen, Globe, FileText, Users, MessageSquare, PieChart, Settings, HelpCircle, HandshakeIcon, Home } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type SidebarNavProps = React.HTMLAttributes<HTMLDivElement>

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const items = [
    {
      title: "Home",
      icon: Home,
      href: "/",
      variant: "default" as const,
    },
    {
      title: "Dashboard",
      icon: BarChart,
      href: "/dashboard",
      variant: "ghost" as const,
    },
    {
      title: "Courses",
      icon: BookOpen,
      href: "/courses",
      variant: "ghost" as const,
    },
    {
      title: "Site Builder",
      icon: Globe,
      href: "/site-builder",
      variant: "ghost" as const,
    },
    {
      title: "Survey Builder",
      icon: FileText,
      href: "/survey-builder",
      variant: "ghost" as const,
    },
    {
      title: "Friends",
      icon: Users,
      href: "/friends",
      variant: "ghost" as const,
    },
    {
      title: "Marketing",
      icon: MessageSquare,
      href: "/marketing",
      variant: "ghost" as const,
    },
    {
      title: "Report Center",
      icon: PieChart,
      href: "/reports",
      variant: "ghost" as const,
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      variant: "ghost" as const,
    },
  ]

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="space-y-1">
            {items.map((item) => (
              <Button
                key={item.title}
                variant={item.variant}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 space-y-4 py-4 w-[240px] border-t">
        <div className="px-4 py-2">
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Need help?
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <HandshakeIcon className="mr-2 h-4 w-4" />
              Become a partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

