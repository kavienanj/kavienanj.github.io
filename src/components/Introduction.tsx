export default function Introduction() {
    return (
        <div className="h-screen flex flex-col">
            <h1 className={`absolute w-full top-[15vh] font-goldman text-white text-center font-bold text-8xl leading-[65%] opacity-80`}>
                BUILD <span className='text-neon'>BLEEDING EDGE</span> APPLICATIONS WITH ME!
            </h1>
            <div className='flex flex-wrap h-full w-full items-center justify-center z-10'>
                <div className='flex flex-col justify-center items-center w-72'>
                    <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-neon shadow-[-3px_10px_40px_0px_rgba(0,255,221,0.40)]' />
                    <div className='absolute h-[180px] w-[180px] rounded-full shadow-[0px_-8px_25px_10px_rgba(0,0,0,0.8)]' />
                    <img className='absolute mb-12 ml-6 w-72' src='images/avatar_greet_x2.png' alt='Avatar Greetings' />
                    <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-transparent border-b-neon rotate-12' />
                    <div className='absolute h-[240px] w-[240px] rounded-full border-[30px] border-solid border-transparent border-b-neon -rotate-2'  />
                    <div className='absolute h-[180px] w-[180px] rounded-full shadow-[0px_-8px_25px_10px_rgba(0,0,0,0.8)]' 
                     style={{clipPath: 'polygon(50% 50%, -57.9% 120%, 125.1% 120%);' }} />
                </div>
            </div>
            <div className='bg-neon w-full py-4 flex flex-row items-center justify-center font-meslo text-lg gap-20 shadow-[0px_-4px_50px_0px_rgba(0,255,221,0.40)]'>
                <span>Scroll down</span>
                <svg className="mt-3 h-10 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 50" fill="none">
                    <path d="M6.5 50L12.2735 40H0.726497L6.5 50ZM5.5 0V41H7.5V0H5.5Z" fill="black"/>
                </svg>
                <span className="pr-4">Find more</span>
            </div>
        </div>
    )
}