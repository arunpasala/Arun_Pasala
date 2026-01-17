import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-10 py-20 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            More About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            I’m Arun, a{" "}
            <span className="text-green-700 italic">creative engineer</span>
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            I’m Arun Pasala, a proactive full-stack developer passionate about
            creating dynamic web experiences. From frontend to backend, I
            thrive on solving complex problems with clean, efficient code.
            My expertise spans React, Next.js, and Node.js, and I’m always
            eager to learn more.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            When I’m not immersed in work, I’m exploring new ideas and staying
            curious. Life’s about balance, and I love embracing every part of it.
          </p>

          <p className="text-gray-300 font-medium">
            I believe in waking up each day eager to make a difference!
          </p>

          {/* SOCIAL ICONS (optional) */}
          <div className="flex gap-5 pt-4 text-gray-400">
            <span className="hover:text-white cursor-pointer">in</span>
            <span className="hover:text-white cursor-pointer">GitHub</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative flex justify-center">
          <img
            src="/profile.jpg"
            alt="About"
            className="rounded-2xl shadow-2xl max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default About;


