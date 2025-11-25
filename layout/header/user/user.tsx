"use client"
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ArrowUpRightIcon, ShoppingCart, User } from 'lucide-react'
import React from 'react'


import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { isMobile } from 'react-device-detect'

export const HeaderUser: React.FC<{ trigger: React.ReactNode }> = ({ trigger }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {trigger}
            </PopoverTrigger>
            <PopoverContent align="end" className="flex flex-col h-[calc(100dvh_-_85px)] md:h-auto w-screen rounded-none md:w-sm md:rounded-md" sideOffset={8}>

                <div className='flex'>
                    <div>

                        <p className='text-sm font-medium tracking-tight'>
                            Авторизация
                        </p>
                        <span className='text-sm/tight pt-1 tracking-tight text-gray-500 block'>
                            Введите свой адрес электронной почты ниже.
                        </span>
                    </div>
                    <Button variant="link" className='text-sm font-normal'>
                        Регистрация
                    </Button>
                </div>
                <form className='pt-4'>
                    <div className="flex flex-col gap-4">
                        <div className="grid gap-1">
                            <label htmlFor="email" className='text-sm'>Емейл</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-1">
                            <div className="flex items-center">
                                <label htmlFor="password" className='text-sm'>Пароль</label>
                                <a
                                    href="#"
                                    className="ml-auto text-sm inline-block underline-offset-4 hover:underline"
                                >
                                    Забыли пароль?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 pt-4'>
                        <Button className='bg-blue-600 w-full' >
                            Вход
                        </Button>
                        <Button className='w-full' variant="outline" >
                            С помощью Google
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>

    )
}
