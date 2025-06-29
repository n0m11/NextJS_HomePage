
import './globals.css'

export const metadata = {
  title: 'NOMI - Next JS ',
  description: 'Digital Agency Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
