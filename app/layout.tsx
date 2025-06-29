import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Dmytrii Tamurov | TMK – Personal Website',
  description: 'Official personal website of Dmytrii Tamurov. Blog, thoughts, research, and more.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}