function Header() {
  return (
    <>
      <header className='w-100 app-header h-screen '>
        <div className='m-auto py-8 px-10 grid place-items-center h-screen z-50'>
          <div className='header-title text-center'>
            <p className='text-slate-300 leading-normal'>
              Hi! I'm Emarson, and all of this are built simply with..
            </p>
            <h1 className='uppercase primary-title-fade secondary-gradient font-bold'></h1>
            <h1 className='primary-title pl-0 sm:pl-20 uppercase text-center primary-gradient font-bold'>
              Genuine Passion & Interest
            </h1>
          </div>
        </div>
        {/* <div className='absolute left-1/2 top-40 -translate-x-1/2 z-0'>
          <img className='' src={avatar} alt='Emarson Bancud' />
        </div> */}
      </header>
    </>
  );
}

export default Header;
