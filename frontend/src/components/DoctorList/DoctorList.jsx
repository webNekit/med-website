import Image from 'next/image'
import React from 'react'

function DoctorList({doctorsList}) {
  return ( 
    <section className="w-full py-16">
        <div className="w-full flex flex-col items-center gap-6">
            <h2 className="text-center font-bold text-xl">Наша гордость!</h2>
            <div className="w-full grid grid-cols-3 gap-4">
                {doctorsList.length>0?doctorsList.map((item, index) => (
                    <div key={index} className="border rounded-md border-blue-100 p-3">
                        <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes?.Image?.data.attributes?.url}`} className="w-full h-[270px] object-cover rounded-md" alt={item.attributes?.Name} width={500} height={250} />
                        <h3 className="mt-4 text-xl font-semibold">{item.attributes?.Name}</h3>
                    </div>
                )) 
                :
                [1,2,3,4,5,6].map((item,index) => (
                    <div className="bg-slate-100 h-[340px] w-full rounded-md animate-pulse"></div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default DoctorList