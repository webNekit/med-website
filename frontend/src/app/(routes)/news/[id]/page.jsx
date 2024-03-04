"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import GlobalApi from '@/utils/GlobalApi'


export default function page({params}) {

  const [articleDetail, setArticleDetail] = useState([]);

  useEffect(() => {
    getArticleSingle();
  },[]);

  const getArticleSingle = () => {
    GlobalApi.getArticleById(params.id).then(resp => {
      console.log(resp.data.data);
      setArticleDetail(resp.data.data)
    });
  }

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto py-4">
        <h2 className="text-6xl text-blue-700 font-semibold">{articleDetail.attributes?.Name}</h2>
        <img className="w-full h-[530px] object-conver rounded-md mt-4 mb-6" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${articleDetail.attributes?.Image?.data?.attributes?.url}`} alt="" />
        <p className="text-xl text-zinc-600 max-w-5xl mx-auto">{articleDetail.attributes?.LongText}</p>
      </div>
    </section>
  )
}
