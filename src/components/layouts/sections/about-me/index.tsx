import { OvalInterface } from '@/components/utils/customElements';
import { headerImagesLinks } from '@/data/contents';
function index() {
  return (
    <>
      <section className='sm:w-100 sm:w-3/4 m-auto text-center sm:my-60 grid place-items-center px-5'>
        <div>
          <div>
            <p>-About me -</p>
            <h1 className='leading-none'>
              FROM <span className='font-bold italic'> DEFINING</span> THE
              STRATEGY<span>{OvalInterface(headerImagesLinks[0].url)}</span>
              TO
              <span className='font-bold italic'>ACHIEVING</span> THE DIGITAL
              ECOSYSTEM<span>{OvalInterface(headerImagesLinks[0].url)}</span>
            </h1>
          </div>
          <div className='w-100 sm:max-w-4xl m-auto sm:mt-32 mt-10'>
            <h3 className='uppercase'>
              I have always find myself loving the entire process of web
              interaction. From designing, developing back and front,
              maintanance, and almost until user engagement. To put it simply,
              I've always been immersed building websites from the ground up.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
