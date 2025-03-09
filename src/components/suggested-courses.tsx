import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const suggestedCourses = [
  { id: 1, title: "Machine Learning Basics", description: "Learn the fundamentals of ML", duration: "4 weeks" },
  { id: 2, title: "Web Security", description: "Understand common web vulnerabilities", duration: "3 weeks" },
  { id: 3, title: "Mobile App Development", description: "Build cross-platform mobile apps", duration: "6 weeks" },
]

export function SuggestedCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Courses</CardTitle>
      </CardHeader>
      <CardContent>
        {suggestedCourses.map((course) => (
          <div key={course.id} className="mb-6 p-4 border rounded-lg">
            <h3 className="font-medium mb-2">{course.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <Button asChild variant="outline" size="sm">
                <Link href={`/courses/${course.id}`}>Start Course</Link>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

