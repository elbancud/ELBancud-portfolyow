import { clientTestimonies, socials } from '@/data/contents';
import { cardSmall } from '../utils/customElements';
const Footer = () => {
  return (
    <div className='p-3 mt-10 app-header h-screen text-white text-center '>
      <div className='pt-52'>
        <h1 className=' primary-gradient font-bold'>Let’s work together</h1>
        <p>
          While we're at it here are some of what my previous clients have to
          say with the overall experience we had.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-5 my-10'>
        {clientTestimonies.map((data) => {
          return cardSmall(
            data.comment,
            data.avatar,
            data.client,
            data.starCount,
            data.website
          );
        })}
      </div>

      <div className='flex'>
        {socials.map((data) => {
          return (
            <div>
              <a href={data.link}></a>
            </div>
          );
        })}
      </div>
      <div className=' w-100 grid place-items-center'>
        @copyright 2022. Emarson Bancud
      </div>
    </div>
  );
};
export default Footer;
