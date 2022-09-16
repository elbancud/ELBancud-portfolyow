import chooseUp from '@/assets/project-ui/choose-up.jpg';
import hesoyamWeb from '@/assets/project-ui/hesoyam-ch-web.jpg';
import millionLove from '@/assets/project-ui/million-love.png';
import pfc from '@/assets/project-ui/pfc.png';
import vjm from '@/assets/project-ui/vjm-properties.jpg';
import { CardMedium } from '@/components/utils/customElements';
import { useEffect, useState } from 'react';

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

  const GridContainerStyleRight = {
    transform: `translate(${scrollXRightTransform}px, 0px)`,
  };
  const GridContainerStyleLeft = {
    transform: `translate(${scrollXLeftTransform}px, 0px)`,
  };
  return (
    <>
      <section className='w-100 text-center'>
        <div className=''>
          <h1 className='leading-none '>Recent works</h1>
        </div>
        <div className='relative'>
          <div style={GridContainerStyleRight}>
            <div className='mt-32 flex '>
              <div>
                {CardMedium('bg-slate-100', vjm, 'vjm-comsultancy-property')}
              </div>
              <div>{CardMedium('bg-violet-200', hesoyamWeb, 'hesoyam-ch')}</div>
              <div>
                {CardMedium('bg-orange-200', chooseUp, 'choose up design')}
              </div>
              <div>{CardMedium('bg-green-200', pfc, 'plants for cats')}</div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div style={GridContainerStyleLeft}>
            <div className='mt-10 flex '>
              <div>{CardMedium('bg-gray-200', millionLove, 'millionLove')}</div>
              <div>{CardMedium('bg-green-200', pfc, 'plants for cats')}</div>
              <div>{CardMedium('bg-green-200', pfc, 'plants for cats')}</div>
              <div>{CardMedium('bg-green-200', pfc, 'plants for cats')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
