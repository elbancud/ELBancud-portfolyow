import { clientTestimonies, socials } from '@/data/contents';
import { cardSmall } from '../utils/customElements';
const Footer = () => {
  return (
    <>
      <footer className='p-3 mt-10 app-header h-auto text-white text-center '>
        <div className='pt-20 sm:pt-52'>
          <h1 className=' primary-gradient font-bold'>Let’s work together</h1>
          <p>
            While we're at it here are some of what my previous clients have to
            say with the overall experience we had.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
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
        <div>
          <p className='py-5'>Socials</p>
          <div className='flex justify-center space-x-5'>
            {socials.map((data) => {
              return (
                <div key={data.label}>
                  <a href={data.link} target='_blank'>
                    <img src={data.icon} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
      <div className='flex justify-center py-5'>
        <p className='text-[#808080]'>@copyright 2022. Emarson Bancud</p>
      </div>
    </>
  );
};
export default Footer;
