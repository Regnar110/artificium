'use client'
import React from "react"
import Image from 'next/image'
import mainlogo from '../public/home/mainlogo.svg'
import { Button } from "@mui/material"
const Home = () => {
  return (
    <main className="bg-[url(https://i.imgur.com/2oNt9eg.jpeg?2)] flex flex-col items-center">
      <section className="home_landing h-[100vh] flex flex-col items-center">
        <div className="relative w-[400px] home_logo mt-14 mb-40">
          <Image src={mainlogo} alt="home_logo"/>
        </div>
        <section className="home_header text-[100px] font-plus_jakarta_sans font-extrabold flex flex-col justify-center items-center gap-y-24">
          <div className="header flex flex-col text-center">
            <span className="text-white">Empowering your</span>
            <span className='text-transparent bg-clip-text gradient_dayblue_blue_green500'>digital journey</span>          
          </div>
          <button className="bg-[#111737de] w-fit px-8 py-6 rounded-full flex"><span className="text-[20px] text-transparent bg-clip-text gradient_dayblue_blue_green500 font-extrabold">GET STARTED</span></button>
        </section>        
      </section>
      <section className="home-description h-[50vh]  bg-black bg-opacity-70 backdrop-blur-xl rounded drop-shadow-lg">
        <div className="description_header text-[50px] text-white font-semibold flex flex-col text-center mt-40">
          <span className='text-transparent bg-clip-text gradient_dayblue_blue_green500'>AI-powered <span className="text-white">creativity</span></span> 
          at your fingertips
        </div>
      </section>
    </main>
  )
}

export default Home