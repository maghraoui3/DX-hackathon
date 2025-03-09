import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Leaderboard() {
  const leaders = [
    {
      name: "Hamza Balloumi",
      points: 2569,
      avatar: "/hamza.png ",
      position: 1,
      badge: "star",
    },
    {
      name: "Mohamed sonbol",
      points: 1469,
      avatar: "/lotfi.png",
      position: 2,
    },
    {
      name: "Yaagoub gamar al din debiaza",
      points: 1053,
      avatar: "/seif.png",
      position: 3,
    },
    {
      name: "Khedhr Karawitha",
      points: 590,
      avatar: "/bor3i.png",
      position: 4,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-48">
        {leaders.slice(0, 3).map((leader) => (
          <div
            key={leader.name}
            className={`relative flex-1 ml-3 bg-[#22C55E] rounded-t-lg ${
              leader.position === 1 ? "h-full" : "h-2/3"
            }`}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarImage src={leader.avatar} />
                <AvatarFallback>{leader.name[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-white">
              <div className="text-2xl font-bold">{leader.position}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-4 space-y-4">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 w-4">{leader.position}</span>
              <Avatar className="h-8 w-8">
                <AvatarImage src={leader.avatar} />
                <AvatarFallback>{leader.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{leader.name}</div>
                <div className="text-sm text-gray-500">{leader.points} points</div>
              </div>
            </div>
            {leader.badge === "star" && (
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

