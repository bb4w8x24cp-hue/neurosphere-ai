import './globals.css'

export const metadata = {
  title: 'NeuroSphere AI',
  description: 'AI tools for everyone'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>{children}</main>
      </body>
    </html>
  )
}
