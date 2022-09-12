import { OvalInterface } from '@/components/utils/customElements';
import { headerImagesLinks } from '@/data/contents';
function index() {
  return (
    <>
      <div className=' sm:w-100 sm:w-3/4 m-auto sm:py-96 text-center '>
        <div className=''>
          <p>-About me -</p>
          <h1 className='leading-none'>
            FROM <span className='font-bold italic'> DEFINING</span> THE
            STRATEGY<span>{OvalInterface(headerImagesLinks[0].url)}</span>
            TO
            <span className='font-bold italic'>ACHIEVING</span> THE DIGITAL
            ECOSYSTEM<span>{OvalInterface(headerImagesLinks[0].url)}</span>
          </h1>
        </div>
        <div className='w-100 sm:max-w-4xl m-auto mt-32'>
          <h3 className='uppercase'>
            I have always find myself loving the entire process of web
            interaction. From designing, developing back and front, maintanance,
            and almost until user engagement. To put it simply, I've always been
            immersed building websites from the ground up.
          </h3>
        </div>
      </div>
    </>
  );
}

export default index;
