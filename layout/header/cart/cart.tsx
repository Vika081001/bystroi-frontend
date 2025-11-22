'use client'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { MinusIcon, PlusIcon, ShoppingCart, X } from 'lucide-react'
import React from 'react'

import { Separator } from '@/components/ui/separator'
import { isMobile } from 'react-device-detect'
import { PopoverClose } from '@radix-ui/react-popover'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, } from '@/components/ui/input-group'
import { ButtonGroup } from '@/components/ui/button-group'

export const HeaderCart = () => {

    const [count, setCount] = React.useState(1)

    return (
        <Popover modal={isMobile}>
            <PopoverTrigger asChild>
                <Button size="icon" variant="ghost">
                    <ShoppingCart width={20} height={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className='flex flex-col h-[calc(100dvh_-_85px)] md:h-auto w-screen rounded-none md:w-lg md:rounded-md' sideOffset={8}>
                <div className='flex items-center justify-between'>
                    <p className='tracking-tight font-medium'>Корзина</p>
                    <PopoverClose asChild>
                        <Button variant="outline" size="icon" className='text-gray-500'>
                            <X width={16} height={16} />
                        </Button>
                    </PopoverClose>
                </div>
                <div className='flex flex-col gap-2 pt-4 flex-1'>
                    <div className='flex gap-2'>
                        <div className='rounded-md border border-gray-100 w-24 h-24 p-2'>
                            <img className='w-full h-full' src='/airpods.png' />
                        </div>
                        <div className='py-1 flex-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm tracking-tight font-medium'>AirPods Pro Max</p>
                                <span className='font-medium'>100$</span>

                            </div>
                            <span className='text-sm text-gray-600'>Apple</span>
                            <div className='flex justify-between items-center gap-2 pt-2'>

                                <ButtonGroup
                                    aria-label="count"
                                    className="h-fit"
                                >
                                    <Button variant="outline" size="icon-sm"
                                        disabled={count < 2}
                                        onClick={() => setCount(prev => prev - 1)}>
                                        <MinusIcon />
                                    </Button>
                                    <InputGroup className='w-10 h-8'>
                                        <InputGroupInput
                                            type='number'
                                            value={count}
                                            onChange={(e) => setCount(Number(e.target.value) || 1)}
                                            className='px-1 text-center'
                                        />
                                    </InputGroup>
                                    <Button variant="outline" size="icon-sm" onClick={() => setCount(prev => prev + 1)}>
                                        <PlusIcon />
                                    </Button>
                                </ButtonGroup>
                                <div className='flex justify-end'>
                                    <Button variant="link" className='text-blue-600 px-0'>
                                        Удалить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className='my-4' />
                    <div className='flex gap-2'>
                        <div className='rounded-md border border-gray-100 w-24 h-24 p-2'>
                            <img className='w-full h-full' src='/airpods.png' />
                        </div>
                        <div className='py-1 flex-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm tracking-tight font-medium'>AirPods Pro Max</p>
                                <span className='font-medium'>100$</span>
                            </div>
                            <span className='text-sm text-gray-600'>Apple</span>
                            <div className='flex justify-between items-center gap-2 pt-2'>

                                <ButtonGroup
                                    aria-label="count"
                                    className="h-fit"
                                >
                                    <Button variant="outline" size="icon-sm"
                                        disabled={count < 2}
                                        onClick={() => setCount(prev => prev - 1)}>
                                        <MinusIcon />
                                    </Button>
                                    <InputGroup className='w-10 h-8'>
                                        <InputGroupInput
                                            type='number'
                                            value={count}
                                            onChange={(e) => setCount(Number(e.target.value) || 1)}
                                            className='px-1 text-center'
                                        />
                                    </InputGroup>
                                    <Button variant="outline" size="icon-sm" onClick={() => setCount(prev => prev + 1)}>
                                        <PlusIcon />
                                    </Button>
                                </ButtonGroup>
                                <div className='flex justify-end'>
                                    <Button variant="link" className='text-blue-600 px-0'>
                                        Удалить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className='my-4' />
                    <div className='mt-auto md:mt-0'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <p className='tracking-tight font-medium'>Всего</p>
                                <span className='tracking-tight font-medium'>300$</span>
                            </div>
                            <p className='text-sm/tight text-gray-500 tracking-tight pt-2'>
                                Стоимость доставки и налоги рассчитываются <br />
                                при оформлении заказа.
                            </p>
                        </div>
                        <div className='pt-2'>
                            <a href="/payment">
                                <Button size="lg" className='w-full bg-blue-600'>
                                    Оплатить
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>

    )
}
