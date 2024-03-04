"use client";
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import GlobalApi from '@/utils/GlobalApi'

function NewsLIst() {

  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticlesList();
  }, []);

  const getArticlesList = () => {
    GlobalApi.getArticlesLst().then(resp => {
      console.log(resp.data.data);
      setArticlesList(resp.data.data);
    });
  }

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto py-4">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Наши новости</h2>
        <ul className="w-full grid grid-cols-4 gap-4">
          {articlesList.length > 0 ? articlesList.map((item, index) => (
            <li key={index} className="w-full h-full">
              <article className="w-full h-full flex flex-col p-3 border border-zinc-100 rounded-md">
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes?.Image?.data.attributes?.url}`} alt="Изображение" width="270" height="250" className="w-full h-[280px] object-cover rounded-md" />
                <h3 className="text-xl text-zinc-900 font-medium mt-4">{item.attributes?.Name}</h3>
                <p className="text-zinc-600 mt-4 mb-6">{item.attributes?.SmallText.substring(0, 119)}...</p>
                <Button className="w-full mt-auto" asChild>
                  <Link className="w-full text-center" href={'/news/' + item.id}>Подробнее</Link>
                </Button>
              </article>
            </li>
          )) 
          :
          [1,2,3,4,5,6,7,8].map((item,index) => (
            <div key={index} className="w-full h-[578px] bg-slate-100 rounded-md animate-pulse"></div>
          ))
        }
        </ul>
      </div>
    </section>
  )
}

export default NewsLIst