import {  FooterComponent } from "@/components/custom/FooterComponent";
import { Header } from "@/components/custom/Header";
import { Hero } from "@/components/custom/Hero"
import Image from "next/image";
export default function Home() {
  return (
 <div >
 <Header/>
 <Hero/>
 <FooterComponent/>
 </div> 
  )
}
