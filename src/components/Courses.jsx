import React, { useRef } from 'react';
import Card from './Card';
import CardBottom from './CardBottom';
import CardShose from './CardShose';
import Slider from "react-slick";
import { courses } from '../data/Courses';
import { bottom } from '../data/Bottom';
import { shoes } from '../data/Shose';

const Courses = () => {
  const sliderRefs = {
    previousCourses: useRef(null),
    currentCourses: useRef(null),
    nextCourses: useRef(null),
    previousBottom: useRef(null),
    currentBottom: useRef(null),
    nextBottom: useRef(null),
    previousShoes: useRef(null),
    currentShoes: useRef(null),
    nextShoes: useRef(null)
  };

  const coursesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>, // Elimina la flecha siguiente
    prevArrow: <></>, // Elimina la flecha anterior
    beforeChange: (oldIndex, newIndex) => {
      if (sliderRefs.previousCourses.current && sliderRefs.currentCourses.current && sliderRefs.nextCourses.current) {
        sliderRefs.previousCourses.current.slickGoTo(newIndex === 0 ? courses.length - 1 : newIndex - 1);
        sliderRefs.currentCourses.current.slickGoTo(newIndex);
        sliderRefs.nextCourses.current.slickGoTo((newIndex + 1) % courses.length);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  const bottomSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>, // Elimina la flecha siguiente
    prevArrow: <></>, // Elimina la flecha anterior
    beforeChange: (oldIndex, newIndex) => {
      if (sliderRefs.previousBottom.current && sliderRefs.currentBottom.current && sliderRefs.nextBottom.current) {
        sliderRefs.previousBottom.current.slickGoTo(newIndex === 0 ? bottom.length - 1 : newIndex - 1);
        sliderRefs.currentBottom.current.slickGoTo(newIndex);
        sliderRefs.nextBottom.current.slickGoTo((newIndex + 1) % bottom.length);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  const shoesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>, // Elimina la flecha siguiente
    prevArrow: <></>, // Elimina la flecha anterior
    beforeChange: (oldIndex, newIndex) => {
      if (sliderRefs.previousShoes.current && sliderRefs.currentShoes.current && sliderRefs.nextShoes.current) {
        sliderRefs.previousShoes.current.slickGoTo(newIndex === 0 ? shoes.length - 1 : newIndex - 1);
        sliderRefs.currentShoes.current.slickGoTo(newIndex);
        sliderRefs.nextShoes.current.slickGoTo((newIndex + 1) % shoes.length);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
        <div className='grid md:grid-cols-5 '>
          <div></div>
          <div className='md:w-full'>
            <Slider ref={sliderRefs.previousCourses} {...coursesSettings} className='px-5'>
              {courses.map((course, i) =>
                <div key={i}>
                  <Card course={courses[(i - 1 + courses.length) % courses.length]} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.previousBottom} {...bottomSettings} className='px-5'>
              {bottom.map((item, i) =>
                <div key={i}>
                  <CardBottom bottom={bottom[i === 0 ? bottom.length - 1 : i - 1]} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.previousShoes} {...shoesSettings} className='px-5'>
              {shoes.map((item, i) =>
                <div key={i}>
                  <CardShose shoes={shoes[i === 0 ? shoes.length - 1 : i - 1]} />
                </div>
              )}
            </Slider>
          </div>
          <div className='md:w-full'>
            <Slider ref={sliderRefs.currentCourses} {...coursesSettings} className='px-5'>
              {courses.map((course, i) =>
                <div key={i}>
                  <Card course={course} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.currentBottom} {...bottomSettings} className='px-5'>
              {bottom.map((item, i) =>
                <div key={i}>
                  <CardBottom bottom={item} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.currentShoes} {...shoesSettings} className='px-5'>
              {shoes.map((item, i) =>
                <div key={i}>
                  <CardShose shoes={item} />
                </div>
              )}
            </Slider>
          </div>
          <div className='md:w-full'>
            <Slider ref={sliderRefs.nextCourses} {...coursesSettings} className='px-5'>
              {courses.map((course, i) =>
                <div key={i}>
                  <Card course={courses[(i + 1) % courses.length]} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.nextBottom} {...bottomSettings} className='px-5'>
              {bottom.map((item, i) =>
                <div key={i}>
                  <CardBottom bottom={bottom[(i + 1) % bottom.length]} />
                </div>
              )}
            </Slider>
            <Slider ref={sliderRefs.nextShoes} {...shoesSettings} className='px-5'>
              {shoes.map((item, i) =>
                <div key={i}>
                  <CardShose shoes={shoes[(i + 1) % shoes.length]} />
                </div>
              )}
            </Slider>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
