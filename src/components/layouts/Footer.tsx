import { clientTestimonies, socials } from '@/data/contents';
import { cardSmall } from '../utils/customElements';
const Footer = () => {
  return (
    <div>
      <div className='p-3 mt-10 app-header h-auto text-white text-center '>
        <section className='pt-52'>
          <h1 className=' primary-gradient font-bold'>Let’s work together</h1>
          <p>
            While we're at it here are some of what my previous clients have to
            say with the overall experience we had.
          </p>
        </section>
        <section className='grid grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
          {clientTestimonies.map((data) => {
            return cardSmall(
              data.comment,
              data.avatar,
              data.client,
              data.starCount,
              data.website
            );
          })}
        </section>
        <section>
          <p className='py-5'>Socials</p>
          <div className='flex justify-center space-x-5'>
            {socials.map((data) => {
              return (
                <div>
                  <a href={data.link} target='_blank'>
                    <img src={data.icon} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className='flex justify-center py-5'>
        <p className='text-[#808080]'>@copyright 2022. Emarson Bancud</p>
      </div>
    </div>
  );
};
export default Footer;
