import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

export const ProductItem = () => {
    return (
        <a href='/product' className='relative overflow-hidden h-72 rounded-lg border border-gray-100 shadow-sm hover:ring-2 ring-gray-200 flex items-end'>
            <div className='absolute inset-0'>
                <img src="https://picsum.photos/800/600" className='w-full h-full object-cover' alt="airpods" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className='flex flex-col gap-3 p-3 relative z-10 mt-auto flex-1'>
                <div>
                    <p className='tracking-tight font-medium leading-4 text-white'>AirPods 3 Pro</p>
                    <span className='text-gray-300 text-sm block'>Электроника</span>
                    <b className='font-medium text-white'>
                        300$
                    </b>
                </div>
                <Button className='w-full' variant="outline" >
                    <ShoppingCart width={16} height={16} />
                    В корзину
                </Button>
            </div>

        </a>
    )
}
