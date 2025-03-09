import { getServerSession } from "next-auth/next"
import { authOptions } from '@/lib/auth'
import { RecentCourses } from "@/components/recent-courses"
import { SuggestedCourses } from "@/components/suggested-courses"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TopNav } from "@/components/top-nav"
import { SidebarNav } from "@/components/sidebar-nav"
import { MobileNav } from "@/components/mobile-nav"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex">
          <aside className="hidden md:block w-[240px] bg-white border-r min-h-screen">
            <SidebarNav />
          </aside>
          <main className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-8">Welcome to E-School</h1>
              <div className="grid gap-6 md:grid-cols-2">
                <RecentCourses />
                <SuggestedCourses />
              </div>
            </div>
          </main>
        </div>
        <MobileNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to E-School</h1>
      <p className="text-xl mb-8">Your gateway to online learning</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}

