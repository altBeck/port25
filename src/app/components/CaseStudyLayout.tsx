import React from 'react';
import Image from 'next/image';

const CaseStudyLayout = () => {
  return (
    <div>
      <header className="gap-6 md:gap-16 flex-col flex">
        <h1 className="text-[#08191F] pt-20 md:pt-24 leading-none text-[3.25rem] xl:text-[108px]">Refreshing Puplar's crypto payment solution.</h1>

        <Image 
          src="/assets/images/puplar/puplar-header.png"
          alt='Puplar Header image'
          width={990}
          height={400}
          className=""
        />
      </header>

      <div className="w-full text-black">x
        <div className='py-56'>x</div>
        <div className='py-24'>d</div>
      </div>
    </div>
  )
}

export default CaseStudyLayout