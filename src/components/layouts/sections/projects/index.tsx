import { useEffect, useState } from "react";

import vjm from "@/assets/project-ui/vjm-properties.jpg";
import hesoyam from "@/assets/project-ui/hesoyam-ch-web.jpg";
import chooseUp from "@/assets/project-ui/choose-up.jpg";
import pfc from "@/assets/project-ui/pfc.png";
import taraenca from "@/assets/project-ui/taraenca.jpg";

function index() {
  const [scrollYValue, setScrollYValuue] = useState<Number>();
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYValue]);

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
  return (
    <>
      <div className='h-screen w-100 sm:pt-96 text-center py-20 '>
        <div className=''>
          <h1 className='leading-none '>Recent works</h1>
        </div>
        <div className='mt-32 grid grid-cols-4 gap-10'>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
          <div>{Card("bg-orange-900", chooseUp, "choose up design")}</div>
          <div>{Card("bg-green-600", pfc, "plants for cats")}</div>
        </div>
        <div className='mt-10 grid grid-cols-4 gap-10'>
          <div>{Card("bg-black", taraenca, "taraenca")}</div>
        </div>
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
