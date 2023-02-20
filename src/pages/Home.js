import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard';
import { FaTruck, FaShieldAlt, FaTags, FaCreditCard } from 'react-icons/fa';



function Home() {
  const products = [
    {
      id: 1,
      name: 'ICS CXP MARS.II Carbine AEG Airsoft Rifle, Black',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/1280x1280/products/18893/101916/ics-cxp-marsii-carbine-aeg-airsoft-rifle-black__51722.1676250843.jpg?c=2',
      price: '$464.95',
    },
    {
      id: 2,
      name: 'G&G Armament GPM1911 CP Gas Blowback Airsoft Pistol, Macaron Blue',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/640w/products/18776/98025/gandg-armament-gpm1911-cp-gas-blowback-airsoft-pistol-macaron-blue__49511.1661888981.jpg?c=2',
      price: '$205.00',
    },
    {
      id: 3,
      name: 'T4E HDX Shotgun .68 Cal Air Rifle, Black',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/1280x1280/products/18966/101827/t4e-hdx-co2-shotgun-.68-cal-air-rifle-black__32700.1675845595.jpg?c=2',
      price: '$289.95',
    },
    {
      id: 4,
      name: 'ASG Steyr Scout Airsoft Sniper Rifle, Grey',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17698/82925/asg-steyr-scout-airsoft-sniper-rifle-grey__18086.1658487233.jpg?c=2',
      price: '$499.95',
    },
    {
      id: 5,
      name: 'Lancer Tactical Red Mini Laser with Weaver Mount',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/1122/83370/lancer-tactical-red-mini-laser-with-weaver-mount__22919.1631609594.jpg?c=2',
      price: '$17.20',
    },
    {
      id: 6,
      name: 'KRYTAC 24 Round CO2 Magazine For Maxim 9 Gas Blowback Airsoft',
      image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/18963/101871/krytac-24-round-co2-magazine-for-maxim-9-gas-blowback-airsoft-pistols-black__22106.1676077795.jpg?c=2',
      price: '$49.95',
    },
  ];
  return (
    <div className='container-hero'>
      <HeroSection/>
      <div className='container-product'>
      <h2 className='featured-pro'>Featured Products</h2>
      <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
    </div>
    <div className="advan">
    <h2 className='advantages-pro'> Our Advantages</h2>
    <div className="icon-line">
  <div className="icon-container">
    <FaTruck size={24} color="#ff69b4" title="Fast shipping" />
    <span>Fast shipping</span>
  </div>
  <div className="icon-container">
    <FaShieldAlt size={24} color="#ff69b4" title="Secure shopping" />
    <span>Secure shopping</span>
  </div>
  <div className="icon-container">
    <FaTags size={24} color="#ff69b4" title="Great deals" />
    <span>Great deals</span>
  </div>
  <div className="icon-container">
    <FaCreditCard size={24} color="#ff69b4" title="Multiple payment options" />
    <span>Multiple payment options</span>
  </div>
</div>
    </div>
    </div>
   
    </div>
  )
}

export default Home
