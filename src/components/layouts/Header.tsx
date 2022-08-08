import Logo from '@/assets/logo/logoVer2.png';

const GOOF_IMG =
  'https://www.slashfilm.com/img/gallery/michael-scotts-12-most-redeeming-moments-in-the-office/intro-1634858598.jpg';
const PASSION_IMG =
  'https://images.unsplash.com/photo-1598414351527-8052258ba4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80';

function Header() {
  const OvalInterface = (image_source: string) => {
    return (
      <img
        className='inline-block rounded-full overflow-hidden h-20 w-32'
        src={image_source}
        alt='interface'
      />
    );
  };
  const CircleInterface = (image_source: string) => {
    return (
      <div className='inline-block rounded-full overflow-hidden h-20 w-20 bg-slate-700'>
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
        <span>{CircleInterface(GOOF_IMG)}</span>, passion{' '}
        <span>{OvalInterface(PASSION_IMG)}</span>, and interest.{' '}
        <span>{OvalInterface(GOOF_IMG)}</span>"
      </h1>
    </div>
  );
}

export default Header;
