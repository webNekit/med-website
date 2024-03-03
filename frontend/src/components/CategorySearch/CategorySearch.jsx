"use client"
import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import GlobalApi from '@/utils/GlobalApi';


function CategorySearch() {


  useEffect(() => {
    getCategoryList();
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log(resp.data.data);
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
    </div>
  )
}

export default CategorySearch