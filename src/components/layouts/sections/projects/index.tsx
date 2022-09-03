import vjm from "@/assets/project-ui/vjm-properties.jpg";
import hesoyam from "@/assets/project-ui/hesoyam-ch-web.jpg";
import chooseUp from "@/assets/project-ui/choose-up.jpg";

function index() {
  const Card = (bgColor, imageSrc, alt) => {
    const classProperties = `${bgColor} px-10 py-16`;
    return (
      <div className={classProperties}>
        <img
          className='max-w-md max-h-md object-contain m-auto'
          src={imageSrc}
          alt={alt}
        />
      </div>
    );
  };
  return (
    <>
      <div className='h-screen w-100 sm:pt-96 text-center pt-20 '>
        <div className=''>
          <h1 className='leading-none '>Recent works</h1>
        </div>
        <div className='mt-32 grid grid-cols-4 gap-5'>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
          <div>{Card("bg-orange-900", chooseUp, "choose up design")}</div>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-'>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-violet-900", hesoyam, "hesoyam-ch")}</div>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
          <div>{Card("bg-black", vjm, "vjm-comsultancy-property")}</div>
        </div>
      </div>
    </>
  );
}

export default index;
