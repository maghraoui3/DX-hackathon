import { Pencil, Trophy } from 'lucide-react'

export function QuizStats() {
  return (
    <div className="bg-[#F0FDF4] rounded-lg p-6">
      <div className="text-gray-600 mb-4">
        You have played a total
        <br />
        24 quizzes this month!
      </div>
      <div className="relative w-24 h-24 mx-auto mb-6">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2"
            strokeDasharray="74, 100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#22C55E]">37</div>
            <div className="text-xs text-gray-500">/50</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <Pencil className="h-5 w-5 mx-auto mb-2 text-gray-400" />
          <div className="text-2xl font-bold text-gray-900">5</div>
          <div className="text-sm text-gray-500">Quiz Created</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <Trophy className="h-5 w-5 mx-auto mb-2 text-gray-400" />
          <div className="text-2xl font-bold text-gray-900">21</div>
          <div className="text-sm text-gray-500">Quiz Won</div>
        </div>
      </div>
    </div>
  )
}

