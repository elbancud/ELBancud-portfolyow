import { clientTestimonies } from '@/data/contents';

const Footer = () => {
  const card = (comment, avatarSrc, clientName, starCount) => {
    return (
      <div className=' bg-gray-900 text-white p-3 flex flex-col justify-between rounded'>
        <div>
          <h4>{comment}</h4>
        </div>
        <div className='flex justify-center pt-5'>
          <img
            className='inline-block h-6 w-6 rounded-full ring-2 ring-white'
            src={avatarSrc}
          />
          <p className='px-3'>{clientName}</p>
        </div>
      </div>
    );
  };
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
          return card(data.comment, data.avatar, data.client, data.starCount);
        })}
      </div>
      <div className=' w-100 grid place-items-center'>@ copyright</div>
    </div>
  );
};
export default Footer;
