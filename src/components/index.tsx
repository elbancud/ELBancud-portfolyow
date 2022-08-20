import Header from './layouts/Header';
import AboutMe from './layouts/sections/about-me';

function index() {
  return (
    <div>
      <div className='w-100'>
        {/* <NavBar /> */}
        <Header />
        <AboutMe />
        {/* <ClientTestimonies /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default index;
