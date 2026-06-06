import React from 'react'
import ProductCarousel from './components/ProductCarousel'
import photo from './assets/WirelessHeadphones.jpg'
import photo1 from './assets/Guitar.jpg'
import photo2 from './assets/DrawingTablet.jpg'
import photo3 from './assets/Camera.jpg'
import photo4 from './assets/Lens.jpg'
import photo5 from './assets/Film.jpg'
import photo6 from './assets/Diana.jpg'
import photo7 from './assets/Laptop.jpg'




const App = () => {
  const products=[
    {
      id:1,
      name:'Wireless Bluetooth Headphones',
      img: photo,
      price: 79.99,
      originalPrice: 99.99,
      rating: 4, 
      reviewCount: 125,
      isNew: true,
    },

    {
      id:2,
      name:'Acoustic Guitar',
      img: photo1,
      price: 180.00,
      originalPrice: 200.00,
      rating: 5, 
      reviewCount: 89,
      isNew: false,
    },

    {
      id:3,
      name:'Bamboo Tablet',
      img: photo2,
      price: 29.99,
      originalPrice: 83.99,
      rating: 4, 
      reviewCount: 100,
      isNew: false,
    },

    {
      id:4,
      name:'Camera',
      img: photo3,
      price: 125.00,
      originalPrice: 350.00,
      rating: 3, 
      reviewCount: 99,
      isNew: false,
    },

    {
      id:5,
      name:'50 mm Lens',
      img: photo4,
      price: 524.50,
      originalPrice: 539.00,
      rating: 5, 
      reviewCount: 30,
      isNew: true,
    },

    {
      id:6,
      name:'Ilford Film ISO 100',
      img: photo5,
      price: 10.00,
      originalPrice: 12.99,
      rating: 4, 
      reviewCount: 42,
      isNew: true,
    },

    {
      id:7,
      name:'Diana Analog Camera',
      img: photo6,
      price: 20.00,
      originalPrice: 55.00,
      rating: 3, 
      reviewCount: 25,
      isNew: false,
    },

    {
      id:8,
      name:'Laptop',
      img: photo7,
      price: 180.00,
      originalPrice: 350.00,
      rating: 5, 
      reviewCount: 200,
      isNew: false,
    },
  
  ]
  return(
    <div className='bg-gray-900 min-h-screen'>
      <ProductCarousel products={products}/>
    </div>
  )
}

export default App