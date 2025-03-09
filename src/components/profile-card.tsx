import { Globe, Award, Trophy } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileCard() {
  return (
    <div className="bg-[#22C55E] text-white rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="h-16 w-16 border-2 border-white">
          <AvatarImage src="/hamza.png" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-bold">Hamza Balloumi</h3>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-5 w-5 opacity-75" />
          <span className="opacity-75">WORLD RANK</span>
          <span className="font-bold">#1,438</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 opacity-75" />
          <span className="opacity-75">LOCAL RANK</span>
          <span className="font-bold">#56</span>
        </div>
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 opacity-75" />
          <span className="opacity-75">POINT</span>
          <span className="font-bold">590</span>
        </div>
      </div>
    </div>
  )
}

