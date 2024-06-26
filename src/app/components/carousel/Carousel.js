

import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { images } from '../../../constants/CrouselContants/constants';
import "./style.scss"
const Carasol = ({showDots}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='crousel_container'>
            <Carousel responsive={responsive} itemClass="carousel-item" showDots={showDots} arrows={false}  autoPlay={true}
                autoPlaySpeed={3000}  infinite={true}  >

                {images.map((image) => {
                    return (
                        <>
                            <div className='card'>
                                <img style={{ height: "200px", width: "100%" }} src={image.image} alt={image.image} />
                            </div>

                        </>

                    )
                })}
            </Carousel>;

        </div>
    )
}

export default Carasol