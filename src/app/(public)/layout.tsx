import { Toaster } from 'sonner'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  )
}
