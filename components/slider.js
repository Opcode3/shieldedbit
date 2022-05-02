import { useState, useEffect, useRef } from 'react';

let count = 0;
let slideInterval;
export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slider_image = [
        '/assets/images/slider/1.jpg',
        '/assets/images/slider/2.jpg',
        '/assets/images/slider/3.jpg'
    ];

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
        <div className='w-full mx-auto'>
            <img src={slider_image[currentIndex]} alt='image slider 1'/>
        </div>
        <div className="absolute w-full top-[30%] md:top-[40%] px-2 md:px-10 lg:px-16  py-2 transform flex justify-between">
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
