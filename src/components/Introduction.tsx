export default function Introduction() {
  return (
    <div className="h-screen flex flex-col overflow-clip">
      <h1 className="absolute w-full top-[15vh] font-goldman text-white text-center font-bold opacity-80 text-4xl leading-[65%] md:text-6xl md:leading-[65%] lg:text-8xl lg:leading-[65%]">
        BUILD <span className='text-neon'>BLEEDING EDGE</span> APPLICATIONS WITH ME!
      </h1>
      <svg className="absolute right-0" xmlns="http://www.w3.org/2000/svg" width="160" height="109" viewBox="0 0 160 109" fill="none">
        <g filter="url(#filter0_d_321_67)">
          <path d="M160 72H35L74 -1" stroke="#00FFDD" strokeWidth="5"/>
        </g>
        <defs>
          <filter id="filter0_d_321_67" x="0.829956" y="-28.178" width="189.17" height="136.678" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="15"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_321_67"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_321_67" result="shape"/>
          </filter>
        </defs>
      </svg>
      <svg className="hidden sm:block absolute bottom-0 md:bottom-9 z-0" xmlns="http://www.w3.org/2000/svg" width="190" height="131" viewBox="0 0 254 171" fill="none">
        <g filter="url(#filter0_d_379_4)">
          <path d="M0 29H218L112.854 135" stroke="#00FFDD" strokeWidth="5"/>
        </g>
        <defs>
          <filter id="filter0_d_379_4" x="-30" y="0.5" width="284.001" height="170.261" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="15"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.866667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_379_4"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_379_4" result="shape"/>
          </filter>
        </defs>
      </svg>
      <div className='flex flex-wrap gap-x-8 pt-[36vh] md:pt-[30vh] lg:pt-[28vh] pb-12 h-full w-full items-center justify-center px-10 z-10'>
        {/* <!-- Avatar --> */}
        <div className='flex flex-col justify-center items-center w-72 scale-[.65] md:scale-75 lg:scale-100 translate-y-5 lg:translate-y-0'>
          <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-neon shadow-[-3px_10px_40px_0px_rgba(0,255,221,0.40)]' />
          <div className='absolute h-[180px] w-[180px] rounded-full shadow-[0px_-8px_25px_10px_rgba(0,0,0,0.8)]' />
          <img className='absolute mb-12 ml-6 w-72' src='images/avatar_greet_x2.png' alt='Avatar Greetings' />
          <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-transparent border-b-neon rotate-12' />
          <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-transparent border-b-neon -rotate-2'  />
          <div className='absolute h-[180px] w-[180px] rounded-full shadow-[0px_-8px_25px_10px_rgba(0,0,0,0.8)]' 
            style={{ clipPath: 'polygon(50% 50%, -57.9% 120%, 125.1% 120%)' }} />
        </div>
        {/* <!-- Introduction Text --> */}
        <div className='relative flex flex-col justify-center items-center w-[600px] mx-3 md:mx-6 lg:mx-10 mt-20 md:mt-10 lg:mt-12 py-5 px-5 md:px-6 lg:px-8 border-4 border-solid border-neon'>
          <h2 className='text-white text-sm md:text-lg lg:text-xl font-meslo tracking-wide'>
            Hi! 👋  I&apos;m <span className='text-neon font-bold'>Kavienan J</span> from Sri Lanka 🇱🇰<br/>
            I build user experiences, such as <span className='text-neon font-bold'>Websites</span> and <span className='text-neon font-bold'>Mobile Apps</span> for individuals and businesses 🚀
          </h2>
          <div className='absolute -top-[31px] -left-[26px] -rotate-45 w-0 h-0 border-solid border-l-[20px] border-r-[20px] border-b-[50px] border-transparent border-b-neon' />
          <div className='absolute -top-[23px] -left-[19px] -rotate-45 w-0 h-0 border-solid border-l-[17px] border-r-[17px] border-b-[42px] border-transparent border-b-black' />
        </div>
        {/* <!-- Social Media Links --> */}
        <div className="flex jsutify-center items-center gap-14 md:gap-18 lg:gap-20">
          <a href="https://www.linkedin.com/in/kavienanj/" target="_blank"><img className="shadow-lg" src="icons/linkedin.svg" alt="LinkedIn Icon" /></a>
          <a href="https://www.upwork.com/freelancers/~01c54f90bd0c543351?s=1110580755107926016" target="_blank"><img className="shadow-lg" src="icons/upwork.svg" alt="Upwork Icon" /></a>
          <a href="mailto:kavienanj@gmail.com" target="_blank"><img className="shadow-lg" src="icons/email.svg" alt="Email Icon" /></a>
          <a href="https://github.com/kavienanj" target="_blank"><img className="shadow-lg" src="icons/github.svg" alt="Github Icon" /></a>
        </div>
      </div>
      {/* <!-- Scroll down --> */}
      {/* <div className='bg-neon w-full py-2 md:py-4 flex flex-row items-center justify-center font-meslo text-sm md:text-lg gap-20 shadow-[0px_-4px_50px_0px_rgba(0,255,221,0.40)]'>
        <span>Scroll down</span>
        <svg className="mt-3 h-8 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 50" fill="none">
          <path d="M6.5 50L12.2735 40H0.726497L6.5 50ZM5.5 0V41H7.5V0H5.5Z" fill="black"/>
        </svg>
        <span className="pr-4">Find more</span>
      </div> */}
      <div className='bg-neon w-full z-10 py-4 md:py-5 flex flex-row items-center justify-center font-meslo text-sm md:text-lg gap-10 md:gap-14 lg:gap-28 shadow-[0px_-4px_50px_0px_rgba(0,255,221,0.40)]'>
        <span>IDEA 💡</span>
        <span>BUILD 🛠️</span>
        <span>DEPLOY 🚀</span>
        <span>SCALE 📈</span>
      </div>
    </div>
  )
}