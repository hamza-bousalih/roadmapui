import {Inter} from 'next/font/google'
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Roadmap Website',
    description: 'Discover curated courses, chart a clear path, and unlock knowledge\'s possibilities on our user-friendly roadmap to personalized learning success.\n',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
