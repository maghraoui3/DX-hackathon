import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import LoginForm from '@/components/login-form'

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
      <LoginForm />
    </div>
  )
}

