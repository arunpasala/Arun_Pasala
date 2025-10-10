
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
 

  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    });
  })
  return (
    <>
    <Header/>
    <Hero/>
    
    </>
  )
}

