import Image from "next/image";

const Hero = () => {
  return (
    // here I have made some changes drag items to the center and apply hover to the image and also apply glassmorphsim to the text background
    <div className="relative mb-40 px-6 md:px-20">
      {/****************** Background Image ******************/}
      <div>
        <Image
          className="absolute -z-10 opacity-20 w-full h-full object-cover"
          src="/landing-bg.jpg"
          fill
          alt="Background Image"
        />
      </div>

      <div className="flex items-center gap-10 flex-wrap justify-center lg:justify-between lg:flex-nowrap">
        {/****************** Profile Image ******************/}
        <div className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <Image
            className="border-b-4 border-lime-400 animate__animated animate__fadeInLeft w-72 sm:w-[400px] md:w-[400px] h-[400px] "
            src="/waqas.jpg"
            alt="Picture of waqas khan"
            width={500}
            height={500}
          />
        </div>

        {/****************** Text Content ******************/}
        <div className="flex justify-center flex-col p-6 animate__animated animate__fadeInRight bg-gray-900 bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h1 className="text-white text-5xl text-center lg:text-left font-extrabold mb-5">
            Hi, I'm <span className="text-lime-400">Waqas khan</span> <br />
          </h1>
          <p className="text-white text-2xl text-center lg:text-left font-normal leading-relaxed">
          I’m a third-semester Computer Science student pursuing my Bachelor's degree at UET Peshawar, with a focus on Full-Stack Web Development. I have developed skills in <span className="text-lime-400"> HTML5</span>, <span className="text-lime-400"> CSS3</span>,  5<span className="text-lime-400"> Bootstrap</span>, <span className="text-lime-400"> Tailwind CSS</span>, <span className="text-lime-400"> JavaScript</span>, <span className="text-lime-400"> Vue.js</span>, . Currently, I’m expanding my backend knowledge with <span className="text-lime-400"> php</span> , <span className="text-lime-400"> Laravel</span>, and <span className="text-lime-400"> MySQL</span>, working towards becoming a full-stack developer
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
