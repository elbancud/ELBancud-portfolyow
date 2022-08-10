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
      <div className='container m-auto py-8 sm:p-64 grid place-items-center '>
        {/* <div className='w-100 grid place-items-center'>
          <p>Hi there, I'm Emarson Bancud</p>
          <a href='#'>
            <img className='w-10 h-12' src={Logo} alt='emarson bancud logo' />
          </a>
        </div> */}
        {/* Built simply by genuinity */}

        <h1 className='uppercase '>
          {/* "Built simply with genuine intention{' '}
          <span>{CircleInterface(headerImagesLinks[0].url)}</span>, passion{' '}
          <span>{OvalInterface(headerImagesLinks[0].url)}</span>, and interest.{' '}
          <span>{OvalInterface(headerImagesLinks[1].url)}</span>" */}
          Lorem ipsum dolor sit amet consect, adipisicing elit.
        </h1>
      </div>
    </>
  );
}

export default Header;
// TODO: render assets
