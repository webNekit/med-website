import React from 'react'
import Image from 'next/image';
import MenuList from './MenuList';
import { Button } from '../ui/button';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-10">
            <Image src="/logo.svg" alt="Логотип сайта" width={180} height={80} />
            <ul className="md:flex gap-8 hidden">
                {MenuList.map((menuItem) => (
                    <li key={menuItem.id}>
                        <Link href={menuItem.url}>{menuItem.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <Button>Начало</Button>
    </header>
  )
}

export default Header