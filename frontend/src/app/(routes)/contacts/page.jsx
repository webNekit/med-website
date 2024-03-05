"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect } from 'react'

export default function contacts() {



  return (
    <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-medium text-blue-500">Оставьте заявку, мы Вам перезвоним</h2>
            {/* Начало формы */}
            <form className="max-w-4xl mx-auto mt-6 grid grid-cols-2 gap-4">
              <div class="w-full">
                <Label htmlFor="name">Ваше имя</Label>
                <Input type="text" id="name" placeholder="Поляков Виталий Сергеевич" />
              </div>
              <div class="w-full">
                <Label htmlFor="email">Эл. адрес</Label>
                <Input type="email" id="email" placeholder="user123@example.ru" />
              </div>
              <div className="w-full col-span-2">
                <Label htmlFor="description">Сообщение</Label>
                <Textarea id="description" placeholder="Введите свое сообщение" />
              </div>
              
            </form>
            {/* Конец формы */}
        </div>
    </section>
  )
}
