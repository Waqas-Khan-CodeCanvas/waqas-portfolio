import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css'
import 'animate.css';
import { Maven_Pro } from 'next/font/google';



const mavenPro = Maven_Pro({
    weight: ['400', '500', '600', '700'],
    style: ['normal',],
    subsets: ['latin',],
    display: 'swap',
})


export const metadata = {
    title: 'Waqas Khan',
    description: 'Generated by create next app',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${mavenPro.className} h-auto`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
