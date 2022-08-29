function Header() {
  const OvalInterface = (image_source: string) => {
    return (
      <img
        className='inline-block rounded-full overflow-hidden w-16 h-10 sm:h-20 sm:w-32'
        src={image_source}
        alt='interface'
      />
    );
  };
  const CircleInterface = (image_source: string) => {
    return (
      <div className='inline-block rounded-full overflow-hidden w-16 h:10 sm:h-20 sm:w-20 bg-slate-700'>
        <img src={image_source} alt='interface' />
      </div>
    );
  };
  return (
    <>
      <div className='w-100 app-header h-screen'>
        <div className='m-auto py-8  grid place-items-center h-screen'>
          {/* <div className='w-100 grid place-items-center'>
          <p>Hi there, I'm Emarson Bancud</p>
          <a href='#'>
            <img className='w-10 h-12' src={Logo} alt='emarson bancud logo' />
          </a>
        </div> */}
          {/* Built simply by genuinity */}
          <div className='header-title text-center'>
            <p className='text-slate-300 leading-normal'>
              Hi! I'm Emarson, and all of this are..
            </p>
            <h1 className='uppercase primary-title-fade secondary-gradient font-bold'>
              {/* "Built simply with genuine intention{' '}
            <span>{CircleInterface(headerImagesLinks[0].url)}</span>, passion{' '}
            <span>{OvalInterface(headerImagesLinks[0].url)}</span>, and interest.{' '}
            <span>{OvalInterface(headerImagesLinks[1].url)}</span>" */}
              Built simply with
              {/* Lorem Ipsum */}
            </h1>
            <h1 className='primary-title pl-0 sm:pl-20 uppercase text-center primary-gradient font-bold'>
              Genuine Passion, & Interest
              {/* Lorem Ipsum */}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
// TODO: render assets
