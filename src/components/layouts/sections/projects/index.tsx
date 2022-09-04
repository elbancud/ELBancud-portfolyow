import { useEffect, useState } from "react";

import vjm from "@/assets/project-ui/vjm-properties.jpg";
import hesoyam from "@/assets/project-ui/hesoyam-ch-web.jpg";
import chooseUp from "@/assets/project-ui/choose-up.jpg";
import pfc from "@/assets/project-ui/pfc.png";
import taraenca from "@/assets/project-ui/taraenca.jpg";

function index() {
  const [scrollXRightTransform, setScrollXRightTransform] = useState<number>(0);
  const [scrollXLeftTransform, setScrollXLeftTransform] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollYValue = window.scrollY;
      if (window.scrollY >= 1675) {
        // scrollYValue;
        setScrollXRightTransform(window.scrollY - 1675);
        setScrollXLeftTransform(1675 - window.scrollY);
      }
      // else if (window.scrollY <= 2104) {
      //   setScrollXRightTransform((currentValue) => {
      //     return currentValue - 5;
      //   });
      // }
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollXRightTransform]);

  const Card = (bgColor, imageSrc, alt) => {
    const classProperties = `${bgColor} px-10 h-80 grid place-item-center`;
    return (
      <div className={classProperties}>
        <img
          className='max-h-md object-contain m-auto'
          src={imageSrc}
          alt={alt}
        />
      </div>
    );
  };
  const GridContainerStyleRight = {
    transform: `translate(${scrollXRightTransform - 10}px, 0px)`,
  };
  const GridContainerStyleLeft = {
    transform: `translate(${scrollXLeftTransform}px, 0px)`,
  };
  const transLateXClass = `translate-x-${scrollXRightTransform} `;
  return (
    <>
      <div className='h-screen w-100 py-96 text-center translate-x '>
        <div className=''>
          <h1 className='leading-none '>Recent works</h1>
        </div>
        <div style={GridContainerStyleRight}>
          <div className='mt-32 grid grid-cols-4 gap-10 '>
            <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
            <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
            <div>{Card("bg-orange-900", chooseUp, "choose up design")}</div>
            <div>{Card("bg-green-600", pfc, "plants for cats")}</div>
          </div>
        </div>
        <div style={GridContainerStyleLeft}>
          <div className='mt-5 grid grid-cols-4 gap-10 '>
            <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
            <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
            <div>{Card("bg-orange-900", chooseUp, "choose up design")}</div>
            <div>{Card("bg-green-600", pfc, "plants for cats")}</div>
          </div>
        </div>
        {/* <div className='mt-10 grid grid-cols-4 gap-10 '>
          <div>{Card("bg-black", taraenca, "taraenca")}</div>
        </div> */}
        {/* <div className='grid grid-cols-4 gap-5 mt-'>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
        </div> */}
      </div>
    </>
  );
}

export default index;
