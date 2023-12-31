"use clinet"

function Hero() {
  return (
      <section
          className="flex lg:flex-row flex-col
            bg-red-500 h-screen md:max-w-6xl gap-4
          md:mx-auto bg-cover bg-hero">

          <div className="flex-1 bg-blue-500 h-[70%] m-6 lg:m-0"
          >

          </div>
          {/* LEFT */}
          <div className="flex-1 bg-blue-500 h-[70%] m-6 lg:m-0"
          ></div>
      </section>
  );
}

export default Hero