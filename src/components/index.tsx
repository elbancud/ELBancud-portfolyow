import Header from "./layouts/Header";
import AboutMe from "./layouts/sections/about-me";
import Projects from "./layouts/sections/projects";

function index() {
  return (
    <div>
      <div className='w-100'>
        {/* <NavBar /> */}
        <Header />
        <AboutMe />
        <Projects />
        {/* <ClientTestimonies /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default index;
