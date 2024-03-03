import Image from 'next/image'
import React from 'react'

function DoctorList({doctorsList}) {
  return ( 
    <section className="w-full py-16">
        <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-center font-bold text-xl">Наша гордость!</h2>
            <div className="w-full">
                {doctorsList&&doctorsList.map((item, index) => (
                    <div key={index}>
                        <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes?.Image?.data.attributes?.url}`} alt={item.attributes?.Name} width={340} height={340} />
                        <h3>{item.attributes?.Name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default DoctorList