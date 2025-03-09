"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    category: "Math",
    score: 100,
  },
  {
    category: "Sports",
    score: 80,
  },
  {
    category: "Music",
    score: 60,
  },
]

export function PerformanceChart() {
  return (
    <div className="bg-[#22C55E] rounded-lg p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Top performance by category</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis
            dataKey="category"
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Bar
            dataKey="score"
            fill="rgba(255,255,255,0.2)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-sm mt-4">
        <div>3/10</div>
        <div>8/10</div>
        <div>6/10</div>
      </div>
      <div className="flex justify-between text-xs text-white/50">
        <div>Answered</div>
        <div>Answered</div>
        <div>Answered</div>
      </div>
    </div>
  )
}

