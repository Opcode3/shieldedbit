import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

let count = 0;
let slideInterval;
import slider_1 from '../public/assets/images/slider/1.jpg';
import slider_2 from '../public/assets/images/slider/2.jpg';
import slider_3 from '../public/assets/images/slider/3.jpg';



export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slider_image = [ slider_1, slider_2, slider_3];

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('anim');
    }

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation)
        slideRef.current.addEventListener("mouseenter", pauseSlider)
        slideRef.current.addEventListener("mouseleave", startSlider)
        startSlider();

      return () => {
          pauseSlider();
      }
    }, [])
    

    const sliderLength = slider_image.length;

    const handleNextClick = () => {
        count = (count + 1) % sliderLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('anim');
    }

    const handlePrevClick = () => {
        count = (count + sliderLength - 1) % sliderLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('anim');
    }

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleNextClick();
        }, 3000);
    }

    const pauseSlider = () =>{ clearInterval(slideInterval) }

  return (
    <div ref={slideRef} className='w-full select-none relative'>
        <div className='w-full max-h-[calc(100vh-90px)] md:mt-[89px] overflow-hidden mx-auto bg-red-400'>
            <Image src={slider_image[currentIndex]} layout='responsive' placeholder='blur' priority alt={`image slider slider_${currentIndex}`}/>
        </div>
        <div className="absolute w-full top-[43%] md:top-[40%] px-2 md:px-10 lg:px-16  py-2 transform flex justify-between">
            <button className='rounded-full transition-colors w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 bg-black text-blue-600' onClick={ handlePrevClick }>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
            </button>
            <button className='rounded-full transition-colors w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 bg-black text-blue-600' onClick={ handleNextClick}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </button>
        </div>
    </div>
  )
}
