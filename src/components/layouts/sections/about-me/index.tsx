function index() {
  return (
    <>
      <div className='h-screen container m-auto py-52 mt-10 sm:mt-40 px-10'>
        <div className=''>
          <p className='leading-normal text-center '>- About me - </p>
          <h1 className='leading-tight'>
            I help from the definition of strategy to the achievement of the
            digital ecosystem
          </h1>
        </div>
        <div className='sm:flex gap-5 '>
          <h3 className='py-10'>
            Since I have always been immersed with full stack development which
            is responsible for, as I see it, the front-end, back-end, and the
            entire process of the application.
          </h3>
          <h3 className='py-10'>
            From this, I am able to cater my clients their digital ecosystem
            which is made up of the target users, 3rd party data services, and
            respective technologies.
          </h3>
        </div>

        <div className='mt-20 sm:mt-96 text-center'>
          <p className='leading-normal '>- Technologies - </p>
          <h1>Here's the technologies I am comfortable using.</h1>
          {/* TODO: Marquee of technologies: Typescript, React JS, Next JS, Vue JS, NodeJS, AdonisJS, MySQL, FireBase, TailwindCSS, MaterialUI, Github, AntDesign, BitBucket */}
        </div>
      </div>
    </>
  );
}

export default index;
