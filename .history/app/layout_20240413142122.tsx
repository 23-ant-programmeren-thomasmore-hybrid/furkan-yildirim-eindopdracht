import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

// Sosyal Medya Linkleri ve İkonları
const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com', icon: <FontAwesomeIcon icon={faTwitter} /> },
  { name: 'Facebook', url: 'https://facebook.com', icon: <FontAwesomeIcon icon={faFacebookF} /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <FontAwesomeIcon icon={faInstagram} /> },
];

export const metadata = {
  title: 'Furkan Yildirim | Portfolio',
  description: 'Furkan is an programming student at Thomas More',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={'${inter.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'
      }>

        <div className="bg-[#1b9f38] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#0ef0f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer
        companyName="Şirket Adı"
        description="Şirketinizin kısa açıklaması buraya gelebilir."
        socialLinks={socialLinks} // Yukarıda tanımlanan sosyal medya linkleri
      />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
 
        
      </body>
    </html>
  )
}
