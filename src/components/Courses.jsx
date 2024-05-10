import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';
import CardBottom from './CardBottom';
import CardShose from './CardShose';
import Slider from "react-slick";
import { courses } from '../data/Courses';
import { bottom } from '../data/Bottom';
import { shoes } from '../data/Shose';

const Courses = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: true,
        }
      }
    ]
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h1 className='py-3 text-3xl font-bold'>Escoge entre tu ropa <span className='text-[#706fe5]'>favorita</span></h1>
          <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
        </div>
        <div className='grid md:grid-cols-3 '>
          <div></div>
          <div className='md:w-full'>
            <Slider {...sliderSettings} className='px-5'>
              {courses.map((course, i) =>
                <div key={i}>
                  <Card course={course} />
                </div>
              )}
            </Slider>
            <Slider {...sliderSettings} className='px-5'>
              {bottom.map((item, i) =>
                <div key={i}>
                  <CardBottom bottom={item} />
                </div>
              )}
            </Slider>
            <Slider {...sliderSettings} className='px-5'>
              {shoes.map((item, i) =>
                <div key={i}>
                  <CardShose shoes={item} />
                </div>
              )}
            </Slider>
          </div>
          <div></div>
        </div>

      </div>
    </div>
  );
};

export default Courses;