/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import image from "../background2.jpg"

export default function Home(){
  return (
    <main>
      <img 
        src={image} 
        alt="background image" 
        className="absolute object-cover w-full h-full" 
      />

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-300 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm Nathan.</h1>
      </section>
      
    </main>
  )
}