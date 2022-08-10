import ClientTestimonies from '@/components/layouts/sections/client-testimonies';
import Header from './layouts/Header';
function index() {
  return (
    <div>
      <div className='w-100'>
        {/* <NavBar /> */}
        <Header />
        <ClientTestimonies />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default index;
