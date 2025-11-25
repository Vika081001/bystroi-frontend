import Poster from '@/pages/index/poster'
import React from 'react'
import { Sheet } from '@/layout'
import Recomendation from '@/pages/index/recomendation'
import Categories from '@/pages/index/categories'
import Auth from '@/pages/index/auth'
import Deals from '@/pages/index/deals'

const Main = () => {
    return (
        <div className='flex flex-col'>
            <Poster />
            <Categories />
            <Recomendation />
            <Auth />
            <Deals />
        </div>
    )
}

export default Main