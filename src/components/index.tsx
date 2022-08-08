import Footer from './layouts/Footer';
import Header from './layouts/Header';

function index() {
  return (
    <div>
      <div className='w-100'>
        {/* <NavBar /> */}
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default index;
