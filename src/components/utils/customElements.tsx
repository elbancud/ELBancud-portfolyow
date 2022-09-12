export const cardSmall = (
  comment: string,
  avatarSrc: string,
  clientName: string,
  starCount: number,
  website: string
) => {
  return (
    <div className=' bg-gray-900 text-white p-5 flex flex-col justify-between rounded'>
      <div>
        <h4>{comment}</h4>
      </div>
      <div className='flex justify-center pt-5 items-center'>
        <img
          className='inline-block h-9 w-9 rounded-full ring-2 ring-white'
          src={avatarSrc}
        />
        <div>
          <p className='px-3 font-bold'>{website}</p>
          <p className='px-3 text-gray-400'>{clientName}</p>
        </div>
      </div>
    </div>
  );
};
export const CardMedium = (bgColor: string, imageSrc: string, alt: string) => {
  const classProperties = `${bgColor} px-10 h-80 flex justify-content-center align-items-center min-w-sm mx-5`;
  return (
    <div className={classProperties}>
      <img className=' object-contain max-w-md' src={imageSrc} alt={alt} />
    </div>
  );
};
export const OvalInterface = (image_source: string) => {
  return (
    <img
      className='inline-block overflow-hidden w-16 h-10 sm:h-20 sm:w-32 mb-5'
      src={image_source}
      alt='interface'
    />
  );
};
export const CircleInterface = (image_source: string) => {
  return (
    <div className='inline-block rounded-full overflow-hidden w-16 h:10 sm:h-20 sm:w-20 bg-slate-700'>
      <img src={image_source} alt='interface' />
    </div>
  );
};
