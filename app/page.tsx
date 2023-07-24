'use client'
import React from "react"
import Image from 'next/image'
import mainlogo from '../public/home/mainlogo.svg'
import { Button } from "@mui/material"
const Home = () => {
  return (
    <main className="bg-[url(https://i.imgur.com/2oNt9eg.jpeg?2)] bg-cover bg-top md:bg-fixed flex flex-col items-center">
      <section className="home_landing flex flex-col items-center">
        <div className="relative w-[270px] md:w-[300px] lg:w-[400px] home_logo mt-14 mb-40">
          <Image src={mainlogo} alt="home_logo"/>
        </div>
        <section className="home_header text-[8vw] md:text-[70px] lg:text-[100px] font-plus_jakarta_sans font-extrabold flex flex-col justify-center items-center gap-y-24 pb-28">
          <div className="header flex flex-col text-center">
            <span className="text-white">Empowering your</span>
            <span className='text-transparent bg-clip-text gradient_dayblue_blue_green500'>digital journey</span>          
          </div>
          <button className="bg-[#111737de] w-fit px-8 py-6 rounded-full flex"><span className="text-[10px] md:text-[15px] lg:text-[20px] text-transparent bg-clip-text gradient_dayblue_blue_green500 font-extrabold">GET STARTED</span></button>
        </section>        
      </section>
      <section className="home-description bg-black bg-opacity-70 backdrop-blur-xl rounded drop-shadow-lg  flex flex-col gap-24">
        <div className="description_header text-[27px] md:text-[30px] lg:text-[50px] text-white font-semibold flex flex-col text-center mt-28">
          <span className='text-transparent bg-clip-text gradient_dayblue_blue_green500'>AI-powered <span className="text-white">creativity</span></span> 
          at your fingertips
        </div>
        <div className="description_grid_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center text-white pb-28 px-8 pt-8">
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
          <div className="home_description_item w-fit flex flex-col gap-6 items-center text-left">
            <h3 className="text-[18px] md:text-[25px] font-bold">All-in-one-workspace</h3>
            <p className="text-[#A5E9BA] max-w-[290px] text-[15px] md:text-[18px]">Manage all your projects and content in one place</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home