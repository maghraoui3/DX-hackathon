"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "2020-09-03", hours: 3 },
  { date: "2020-09-05", hours: 6 },
  { date: "2020-09-07", hours: 8 },
  { date: "2020-09-09", hours: 7 },
]

export function StudyProgressChart() {
  return (
    <div className="h-[300px] w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Studying</span>
          <span className="text-sm text-gray-500">in the last 7 days</span>
        </div>
        <span className="text-[#22C55E] text-sm">Show Report</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            ticks={[3, 6, 9, 12]}
          />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#22C55E"
            strokeWidth={2}
            dot={{ fill: "#22C55E", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

