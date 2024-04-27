import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
const Main = () => {
  return (
    <div id='main'>
        <img className=' w-full h-screen object-cover object-left scle-x-[-1]' src="https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2021/8/10/2-16285588947171006614427.jpg" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center' style={{alignItems: 'center'}}>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>i'm Messi</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>==
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Lionel Messi',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I Love Barcelona',
                            2000,
                            'Admin Ngoc Quang',
                            2000,
                            'Wecoml Website ',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://www.tiktok.com/@quang111420" className='p-[10px] rounded-2xl bg-stone-950 hover:bg-gradient-to-r from-purple-500 to-pink-500'>
                        <FaTiktok size={20} className='cursor-pointer text-white hover:text-violet-300'/>
                    </a>
                    <a href="https://www.facebook.com/ngocquang.nguyen.16100921" className='p-[10px] rounded-2xl bg-sky-700 hover:bg-gradient-to-r from-purple-500 to-pink-500'>
                        <FaFacebookF size={20} className='cursor-pointer text-white hover:text-violet-300'/>
                    </a>
                    <a href="https://www.instagram.com/ngocquang05_/" className='p-[10px] rounded-2xl bg-gradient-to-l hover:bg-gradient-to-r from-purple-500 to-pink-500'>
                        <FaInstagram size={20} className='cursor-pointer text-white hover:text-violet-300'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main