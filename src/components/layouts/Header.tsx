import Logo from '@/assets/logo/logoVer2.png';

const GOOF_IMG =
  'https://www.slashfilm.com/img/gallery/michael-scotts-12-most-redeeming-moments-in-the-office/intro-1634858598.jpg';
const PASSION_IMG =
  'https://w7.pngwing.com/pngs/287/218/png-transparent-paper-flower-cherry-color-origami-color-splash-color-pencil-colors.png';

function Header() {
  const OvalInterface = (image_source) => {
    return (
      <div className='inline-block rounded-full sm:w-36 w-24 overflow-hidden'>
        <img src={image_source} alt='interface' />
      </div>
    );
  };
  return (
    <div className='container text-center m-auto py-8 my-16'>
      <div className='w-100 grid place-items-center'>
        {/* <p>Hi there, I'm Emarson Bancud</p> */}
        <a href='#'>
          <img className='w-10 h-12' src={Logo} alt='emarson bancud logo' />
        </a>
      </div>
      {/* Built simply by genuinity */}

      <h1 className='uppercase '>
        "Built simply with genuine intention{' '}
        <span>{OvalInterface(GOOF_IMG)}</span>, passion{' '}
        <span>{OvalInterface(PASSION_IMG)}</span>, and goof.{' '}
        <span>{OvalInterface(GOOF_IMG)}</span>"
      </h1>
    </div>
  );
}

export default Header;
