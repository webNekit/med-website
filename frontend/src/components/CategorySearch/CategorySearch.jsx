"use client"
import React, { useEffect, useState } from 'react';
import { Image } from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import GlobalApi from '@/utils/GlobalApi';


function CategorySearch() {

  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    getCategoryList();
  },[])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data)
    });
  }

  return (
    <div className="mb-10 flex items-center flex-col gap-4">
        <h2 className="font-bold text-4xl tracking-wide">Поиск врача</h2>
        <h3 className="text-gray-400 text-xl text-center">Вы можете найти любого врача, чтобы он вылечил Вас!</h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Петров Владимир Юрьевич" />
            <Button type="submit" className="flex items-center gap-2">
                <Search size={16} />
                Поиск
            </Button>
        </div>
        {/* start display category list  */}
        {categoryList.map((item, index) => (
          <div key={index}>
              <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes?.Icon?.data.attributes?.url}`} alt="" />
          </div>
        ))}
        {/* end display category list */}
    </div>
  )
}

export default CategorySearch