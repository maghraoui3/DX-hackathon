import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { TopNav } from "@/components/top-nav"
import { StudyProgressChart } from "@/components/study-progress-chart"
import { ProfileCard } from "@/components/profile-card"
import { QuizStats } from "@/components/quiz-stats"
import { PerformanceChart } from "@/components/performance-chart"
import { Leaderboard } from "@/components/leaderboard"
import { SidebarNav } from "@/components/sidebar-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Chatbot } from "@/components/chatbot"
import { Certifications } from "@/components/certifications"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex">
        <aside className="hidden md:block w-[240px] bg-white border-r min-h-screen">
          <SidebarNav />
        </aside>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg h-full flex justify-center items-center p-6 shadow-sm">
                  <StudyProgressChart />
                </div>
              </div>
              <div>
                <Leaderboard />
              </div>
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <ProfileCard />
              </div>
              <div>
                <QuizStats />
              </div>
              <div>
                <PerformanceChart />
              </div>
            </div>
            <div className="mt-6">
              <Certifications />
            </div>
          </div>
        </main>
      </div>
      <MobileNav />
      <Chatbot />
    </div>
  )
}

