import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <section>
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                width={800}
                height={800}
                alt="Фото врачей"
                src="/doctors.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Добро пожаловать в нашу клинику</h2>

              <p className="mt-4 text-gray-600">
                Наши специалисты всегда готовы помочь Вам обрести здоровье!
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero