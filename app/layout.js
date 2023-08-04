import './globals.css'
export const metadata = {
  title: "Product Lists",
  description: 'A list of products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
