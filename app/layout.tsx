import '../globals.css'
import NavBar from './NavBar'

export const metadata = {
  title: 'Email Manager',
  description: 'Send emails and manage your templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html >
  )
}
