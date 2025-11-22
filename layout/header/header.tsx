'use client'
import React, { useEffect, useState } from 'react'
import { Search, ShoppingCart, Heart, User, Flame, Handbag, SquareMenu, Scale, Package, Server, Truck, Grip, Bell, Star, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeaderSearch } from './search'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { HeaderCart } from './cart'
import { HeaderUser } from './user'
import { isMobile } from 'react-device-detect';
import { HeaderSheet } from './sheet'
import { HeaderLocation } from './location'
import { HeaderCatalog } from './catalog'


export const Header = () => {
    const searchRef = React.useRef<HTMLInputElement | null>(null)

    return (
        <header className='relative z-10 border-b border-gray-100'>
            <div className='bg-gray-100'>
                <div className='container'>

                    <div className='flex justify-between items-center py-1'>
                        <div className='flex gap-4'>
                            <HeaderLocation />
                            <Button variant="link" className='text-sm font-normal p-0 h-auto tracking-tight text-gray-600'>About us</Button>
                        </div>
                        <div className='flex gap-4'>
                            <Button variant="link" className='text-sm font-normal p-0 h-auto tracking-tight text-gray-600'>Отзывы</Button>
                            <Button variant="link" className='text-sm font-normal p-0 h-auto tracking-tight text-gray-600'>Вход в систему</Button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='flex gap-2 lg:gap-12 py-2 items-center justify-between'>
                    <a href="/" className='flex gap-2 tracking-tight text-blue-600 text-2xl font-medium'>
                        название
                    </a>
                    <div className=' max-w-2xl w-full flex-1 items-center gap-2 hidden md:flex'>
                        <HeaderCatalog />
                        <Popover>
                            <PopoverTrigger asChild>
                                <InputGroup className='bg-gray-100'>
                                    <InputGroupInput ref={searchRef} placeholder='Ищите товары здесь...' />
                                    <InputGroupAddon>
                                        <Search />
                                    </InputGroupAddon>
                                </InputGroup>
                            </PopoverTrigger>
                            <PopoverContent sideOffset={8}>
                                <HeaderSearch />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='flex items-center gap-2 text-gray-700'>
                        <Button size="icon" variant="ghost" className='md:hidden'>
                            <Search width={20} height={20} />
                        </Button>
                        <a href='/rating' className='hidden md:flex'>
                            <Button size="icon" variant="ghost">
                                <Star width={20} height={20} />
                            </Button>
                        </a>
                        <HeaderCart />
                        <Button size="icon" variant="ghost" className='hidden md:flex'>
                            <Bell width={20} height={20} />
                        </Button>
                        <HeaderUser trigger={<Button size="icon" variant="ghost">
                            <User width={20} height={20} />
                        </Button>} />
                        <HeaderSheet />
                    </div>
                </div>

            </div>
        </header >

    )
}
