import React from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { Grip, Menu } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { HeaderUser } from '../user'


export const HeaderSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className='flex md:hidden'>
                <Button variant="ghost" size="icon">
                    <Menu width={20} height={20} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='racking-tight text-blue-600 text-2xl font-medium'>название</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-4 px-4">
                    <li className='w-full'>
                        <Button size="lg" variant="outline" className='w-full'>
                            <Grip width={16} height={16} />
                            Каталог
                        </Button>
                    </li>
                    <li>
                        <Separator />
                    </li>
                    <li>
                        <a href="/" className='text-lg tracking-tight font-medium'>
                            Категории
                        </a>
                    </li>
                    <li>
                        <Separator />
                    </li>
                    <li>
                        <a href="/" className='text-lg tracking-tight font-medium'>
                            Контакты
                        </a>
                    </li>
                    <li>
                        <Separator />
                    </li>
                    <li>
                        <a href="/" className='text-lg tracking-tight font-medium'>
                            Популярное
                        </a>
                    </li>
                    <li>
                        <Separator />
                    </li>
                    <li>
                        <a href="/" className='text-lg tracking-tight font-medium'>
                            Недавно просмотренные
                        </a>
                    </li>
                    <li>
                        <Separator />
                    </li>
                    <li>
                        <a href="/rating" className='text-lg tracking-tight font-medium'>
                            Рейтинг
                        </a>
                    </li>
                </ul>
                <SheetFooter>
                    <HeaderUser trigger={
                        <Button type="submit">Вход в кабинет</Button>
                    } />
                    <HeaderUser trigger={
                        <Button variant="outline">Регистрация</Button>
                    } />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
