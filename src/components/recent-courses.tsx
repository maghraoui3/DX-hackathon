import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const recentCourses = [
  { id: 1, title: "Introduction to React", progress: 75, totalLessons: 10, completedLessons: 7 },
  { id: 2, title: "Advanced JavaScript Concepts", progress: 50, totalLessons: 12, completedLessons: 6 },
  { id: 3, title: "Node.js Fundamentals", progress: 30, totalLessons: 8, completedLessons: 2 },
]

export function RecentCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue Learning</CardTitle>
      </CardHeader>
      <CardContent>
        {recentCourses.map((course) => (
          <div key={course.id} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{course.title}</h3>
              <span className="text-sm text-gray-500">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="w-full mb-2" />
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
              <span>{course.completedLessons} of {course.totalLessons} lessons completed</span>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href={`/courses/${course.id}`}>Continue</Link>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

