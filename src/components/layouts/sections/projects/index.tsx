import { useEffect, useState } from 'react';

import chooseUp from '@/assets/project-ui/choose-up.jpg';
import hesoyamWeb from '@/assets/project-ui/hesoyam-ch-web.jpg';
import millionLove from '@/assets/project-ui/million-love.png';
import pfc from '@/assets/project-ui/pfc.png';
import vjm from '@/assets/project-ui/vjm-properties.jpg';

function index() {
  const [scrollXRightTransform, setScrollXRightTransform] =
    useState<number>(-100);
  const [scrollXLeftTransform, setScrollXLeftTransform] =
    useState<number>(-100);

  useEffect(() => {
    const handleScroll = () => {
      setScrollXRightTransform(150 + window.scrollY * -0.09);
      setScrollXLeftTransform(-300 + window.scrollY * 0.09);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollXRightTransform, scrollXLeftTransform]);

  const Card = (bgColor, imageSrc, alt) => {
    const classProperties = `${bgColor} px-10 h-80 flex justify-content-center align-items-center min-w-sm mx-5`;
    return (
      <div className={classProperties}>
        <img className=' object-contain max-w-md' src={imageSrc} alt={alt} />
      </div>
    );
  };
  const GridContainerStyleRight = {
    transform: `translate(${scrollXRightTransform}px, 0px)`,
  };
  const GridContainerStyleLeft = {
    transform: `translate(${scrollXLeftTransform}px, 0px)`,
  };
  return (
    <>
      <div className='w-100 text-center '>
        <div className=''>
          <h1 className='leading-none '>Recent works</h1>
        </div>
        <div className='block'>
          <div className='relative'>
            <div style={GridContainerStyleRight}>
              <div className='mt-32 flex '>
                <div>{Card('bg-black', vjm, 'vjm-comsultancy-property')}</div>
                <div>{Card('bg-violet-200', hesoyamWeb, 'hesoyam-ch')}</div>
                <div>{Card('bg-orange-200', chooseUp, 'choose up design')}</div>
                <div>{Card('bg-green-200', pfc, 'plants for cats')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='block'>
          <div className='relative'>
            <div style={GridContainerStyleLeft}>
              <div className='mt-10 flex '>
                <div>{Card('bg-gray-200', millionLove, 'millionLove')}</div>
                <div>{Card('bg-green-200', pfc, 'plants for cats')}</div>
                <div>{Card('bg-green-200', pfc, 'plants for cats')}</div>
                <div>{Card('bg-green-200', pfc, 'plants for cats')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
