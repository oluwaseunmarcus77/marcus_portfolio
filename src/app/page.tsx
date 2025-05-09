// src/app/page.tsx
import Header from '@/components/Header'
import Bio from '@/components/Bio'
import Tabs from '@/components/Tabs'
//import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Bio />
        <Tabs />
      </div>
      <Footer />
    </main>
  )
}
