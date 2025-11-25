import ProductInfo from '@/pages/product/info'
import ProductOrder from '@/pages/product/Order'
import ProductReviews from '@/pages/product/reviews'
import ProductViewed from '@/pages/product/Viewed'
import ProductСharacteristics from '@/pages/product/Сharacteristics'
import React from 'react'
import { isMobile } from 'react-device-detect'

const Product = () => {

    return (
        <div className='container'>
            <div className='flex gap-8 flex-col xl:flex-row'>
                <div className='flex flex-col'>
                    <ProductInfo />

                    {isMobile && <ProductOrder />}
                    <ProductСharacteristics />
                    <ProductReviews />
                </div>
                {!isMobile &&
                    <ProductOrder />
                }

            </div>

            <ProductViewed />
        </div>
    )
}

export default Product