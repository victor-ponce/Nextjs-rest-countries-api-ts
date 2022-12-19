import '../styles/globals.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
