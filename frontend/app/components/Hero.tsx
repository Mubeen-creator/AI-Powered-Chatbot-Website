import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='bg-gradient-to-tr from-blue-300 to-black w-screen h-auto text-white'>
      {/* text */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='pt-10 text-4xl font-bold'>Unleash The Power Of AI With Mubeen's Chatbot</h1>
        <p className='font-medium  max-w-[40%] text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam qui reiciendis ea? Optio eius nulla earum, nesciunt modi quae suscipit temporibus repellendus soluta tenetur harum</p>
        <Link href={"/trychatbot"}>
        <button className='bg-white rounded-full px-8 py-4 text-black mt-10'>Get Started</button>
        </Link>
      </div>
      {/* image */}
      <div className='flex flex-col justify-center items-center'>
        <Image src={"/Hero2.png"} alt='image' width={800} height={600}/>
      </div>
    </div>
  )
}

export default Hero