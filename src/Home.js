import React from 'react'
import Product from './Product'

import './Home.css'

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img 
                    className = "home__image"
                    src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                    alt = "" 
                />
                <div className = "home__row">
                    <Product 
                        id = "12345"
                        title = 'The leanf startup'
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/41Asyvu2-eL.jpg"
                        rating = {5}
                         />
                    <Product 
                        id = "12345"
                        title = 'The leanf startup'
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/41Asyvu2-eL.jpg"
                        rating = {5}
                         />
                    <Product 
                        id = "12345"
                        title = 'The leanf startup'
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/41Asyvu2-eL.jpg"
                        rating = {5}
                         />
                    {/* Product */}
                </div> 
                
                <div className = "home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className = "home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
