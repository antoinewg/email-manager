export const metadata = {
  title: 'Email Manager',
  description: 'Send email and manage your email templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
