import React, { useState } from "react";
import { FiChevronRight, FiStar} from 'react-icons/fi';

const ProductCarousel = ({products}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState (1);

    const updateItemsToShow = () =>{
        if (window.innerWidth >= 1024) {
            setItemsToShow(4);
        } else if (window.innerWidth >= 768) {
            setItemsToShow(3);
        } else if (window.innerWidth >= 640) {
            setItemsToShow(2);
        } else {
            setItemsToShow(1);
        }
    }
    
    useState(()=>{
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= products.length - itemsToShow ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>
            prevIndex === 0 ? products.length - itemsToShow : prevIndex - 1
        );
    ;}
    
    const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);
    
    return(
        <section className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
            <h2 className="text-2xl sm:text-3xl text-center text-white font-bold mb-4 sm:mb-6
            underline decoration-blue-500">
                All Products
            </h2>
            <div className="relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
                sm:gap-6 transition-transform duration-300">
                    {visibleProducts.map((product)=>(
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {
                    products.length > itemsToShow && (
                        <>
                            <button
                                onClick={prevSlide}
                                className='absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md
                                p-1 sm:p-2 z-10 hover:bg-gray-100'
                                aria-label='Previous products'>
                                    <FiChevronRight className='text-gray-700 text-lg sm:text-xl' />
                            </button>
                        </>
                    )
                }
            </div>
        </section>
    )
}

const ProductCard = ({product}) => {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg
        transition-all starting:opacity-0 starting:translate-y-60 duration-1000">
            <div className="relative pb-[100%] overflow-hidden">
                <img
                src={product.img}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105
                sm:hover:scale-110 transition-transform duration-500" />
                {
                    product.isNew && (
                        <span className="absolute top-2 bg-red-500 text-white text-xs font-bold
                        px-2 py-1 rounded-full">
                            NEW
                        </span>
                    )
                }
            </div>
            <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                    {product.name}
                </h3>
                <div className='flex items-center mb-1 sm:mb-2'>
                    {[...Array(5)].map((_, i)=>(
                        <FiStar
                            key={i}
                            className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill='currentColor'
                            />
                    ))}
                    <span>
                        ({product.reviewCount})
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        {
                            product.originalPrice && (
                                <span className="text-gray-400 line-through mr-1 sm:mr-2 text-xs sm:text-sm">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )
                        }
                        <span className="font-bold text-base sm:text-lg">
                            ${product.price.toFixed(2)}
                        </span>
                        <button className="bg-radial-[at_25%_25%] from-white to-blue-800 to-35% hover:to-blue-950
                        text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                            <a href="#">Add to Cart</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel