import Head from "next/head"
import GradientWrapper from "../components/GradientWrapper"
import CTA from "../components/ui/CTA"
import Features from "../components/ui/Features"
import FooterCTA from "../components/ui/FooterCTA"
import Hero from "../components/ui/Hero"
import LogoGrid from "../components/ui/LogoGrid"
import Testimonials from "../components/ui/Testimonials"
import ToolKit from "../components/ui/ToolKit"
import Services from "../components/ui/Services"
import Navbar from "../components/ui/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <div className="bg-landing bg-cover bg-right">
        <Navbar />
        <Hero />
      </div>

      {/* <LogoGrid /> */}
      {/* <GradientWrapper> */}
        <Services />
        <Features />
        <CTA />
      {/* </GradientWrapper> */}
      {/* <ToolKit /> */}
      {/* <GradientWrapper><Testimonials /></GradientWrapper> */}
      <FooterCTA />
    </>
  )
}
