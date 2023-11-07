import Image from 'next/image'




import logo from '@/public/images/logo.svg';
import HeroSection from './components/HeroSection';
import AdvanceStatistics from './components/AdvanceStatistics';





export default function Home() {
  return (

    <div className="flex flex-col font-Poppins  items-center">
      <HeroSection />
      <AdvanceStatistics />
    </div>
  )
}
