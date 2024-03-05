"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState} from 'react';
import { toast } from 'sonner';
 
export default function contacts() {

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userDescription, setUserDescription] = useState();

  const saveApplications = () => {
    const data = {
      data: {
        Name: userName,
        Email: userEmail,
        Description: userDescription
      }
    }

    GlobalApi.createApplication(data).then(resp => {
      console.log(resp);
      if ( resp ) {
        toast("Заявка успешно отправлена! Ожидайте ответа от поддержки");
      }
    });

  }

  return (
    <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-medium text-blue-500">Оставьте заявку, мы Вам перезвоним</h2>
            {/* Начало формы */}
            <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 gap-4">
              <div className="w-full">
                <Label htmlFor="name">Ваше имя</Label>
                <Input type="text" id="name" onChange={(e) => setUserName(e.target.value)} placeholder="Поляков Виталий Сергеевич" />
              </div>
              <div className="w-full">
                <Label htmlFor="email">Эл. адрес</Label>
                <Input type="email" id="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="user123@example.ru" />
              </div>
              <div className="w-full col-span-2">
                <Label htmlFor="description">Сообщение</Label>
                <Textarea id="description" onChange={(e) => setUserDescription(e.target.value)} placeholder="Введите свое сообщение" />
              </div>
              <div className="w-full col-span-2 mt-6 flex">
                <Button onClick={() => saveApplications()}>Отправить</Button>
              </div>
            </div>
            {/* Конец формы */}
        </div>
    </section>
  )
}
