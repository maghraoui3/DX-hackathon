'use client'

import { ChevronRight} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function TopNav() {
  const router = useRouter()
  return (
    <div className="flex h-16 items-center justify-between px-4 border-b">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Courses Manager</span>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">Content Marketing</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button 
          variant="default"
          className="bg-red-500 text-white rounded-md hover:bg-transparent hover:text-red-500 border border-red-500" 
          onClick={() => {
            signOut({ redirect: false });
            router.push('/login');
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

