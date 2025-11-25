import { Button } from '@/components/ui/button'
import { Truck, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Poster = () => {
    return (
        <section className="relative pt-6">
            <div className='container'>
                <Carousel className="h-56 relative overflow-hidden rounded-lg">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className='h-56 w-full'>
                                <img src="https://picsum.photos/800/600" className='w-full h-full object-cover' alt="Placeholder" />

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='left-4' />
                    <CarouselNext className='right-4' />
                </Carousel>
            </div>
        </section>
    )
}

export default Poster