import Logo from '@/assets/logo/logoVer2.png';
import { navItems } from '@/data/contents';
const NavBar = () => {
  return (
    <>
      <div className='sticky top-0 p-3'>
        <div className='container flex justify-between m-auto'>
          <div>
            <a href='#'>
              <img className='w-10 h-12' src={Logo} alt='emarson bancud logo' />
            </a>
          </div>
          <ul className=' space-x-2 hidden sm:flex  '>
            {navItems.map((item) => {
              return (
                <li className='grid place-items-center' key={item.key}>
                  <a href='#'>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className='block sm:hidden p-3 w-100'></div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
