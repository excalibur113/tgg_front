import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const products = [
    { name: 'G&G Armament GPM1911 CP Gas Blowback Airsoft Pistol, Macaron Blue',price: '$205.00', category: 'Category 1' , image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/18776/98025/gandg-armament-gpm1911-cp-gas-blowback-airsoft-pistol-macaron-blue__49511.1661888981.jpg?c=2',  },
    { name: 'Desert Eagle Racoon Special Hand Cannon Gas Blowback Airsoft Pistol, Chrome', price: '$300.95', category: 'Category 1', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/18129/90034/desert-eagle-raccoon-special-hand-cannon-gas-blowback-airsoft-pistol-chrome__56458.1646715210.jpg?c=2' },
    { name: 'Elite Force 1911A1 Full Metal CO2 Airsoft Pistol with Blowblack',price: '$129.95', category: 'Category 1', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/1932/81692/elite-force-1911a1-full-metal-co2-airsoft-pistol-with-blowback__04719.1628924873.jpg?c=2' },
    { name: 'HFC Tactical Gas Blowblack Airsodt Pistol, Black/Gold',price: '$93.49', category: 'Category 1' , image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/18133/90071/hfc-hg-282asgb-tactical-gas-blowback-pistol-blackgold__33779.1652833063.jpg?c=2' },
    { name: 'Glock 17 Gen5 Gas Blowblack Airsoft Pistol, Black',price: '$184.95', category: 'Category 1', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17536/75153/glock-17-gen5-gas-blowback-airsoft-pistol-black__27302.1616433656.jpg?c=2' },
    { name: 'ASG B&T Universal Service Weapon Gas Blowback Airsoft Pistol, Black',price: '$214.95', category: 'Category 1', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17264/69669/asg-bandt-universal-service-weapon-gas-blowback-airsoft-pistol-black__88479.1610847514.jpg?c=2' },
    { name: 'ASG TAC-6 CO2 Semi-Auto Sniper Rifle with Intergrated Laser & Bipod',price: '$108.95', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/6464/74457/asg-tac-6-co2-semi-auto-sniper-rifle-with-integrated-laser-and-bipod__50977.1615721272.jpg?c=2' },
    { name: 'WinGun Mosin-Nagant M44 CO2 Bolt Action Airsoft Rifle w/Bayonet',price: '202.50', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/12894/63825/wingun-mosin-nagant-m44-co2-bolt-action-airsoft-rifle-w-bayonet__28354.1610834686.jpg?c=2' },
    { name: 'HFC Bolt Action CO2 Airsoft Sniper Rifle, Black',price: '$169.99', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/2834/81027/hfc-bolt-action-co2-airsoft-sniper-rifle__19412.1626242022.jpg?c=2' },
    { name: 'KWA LM4 RIS PTR Gas Blowback M4 Airsoft Professonial Training Rifle',price: '$420.00', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/7416/72413/kwa-lm4-ris-ptr-gas-blowback-m4-airsoft-professional-training-rifle__09185.1613297080.jpg?c=2' },
    { name: 'KJW KC-02 V2 Tactical Carbine GBB Airsoft Rifle, Black',price: '$299.95', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/3316/79880/kjw-kc-02-v2-tactical-carbine-gbb-airsoft-rifle__33743.1623687767.jpg?c=2' },
    { name: 'KWA LM4 PTR Gas Blowblack M4 Airsoft Professional Training Rifle',price: '$420.00', category: 'Category 2', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/3316/79880/kjw-kc-02-v2-tactical-carbine-gbb-airsoft-rifle__33743.1623687767.jpg?c=2' },
    { name: 'ASG Steyr Scout Airsoft Sniper Rifle, Black',price: '$499.95', category: 'Category 3', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17699/83295/asg-steyr-scout-airsoft-sniper-rifle-black__74332.1631609427.jpg?c=2' },
    { name: 'ASG Steyr Scout Airsoft Sniper Rifle, Grey',price: '$499.95', category: 'Category 3', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17698/82925/asg-steyr-scout-airsoft-sniper-rifle-grey__18086.1658487233.jpg?c=2' },
    { name: 'ASG Action Army T11 Airsoft Sniper Rifle, Black',price: '$219.95', category: 'Category 3', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/17470/65653/asg-action-army-t11-airsoft-sniper-rifle-black__28076.1610841085.jpg?c=2' },
    { name: 'WELL Airsoft Spring EBR Sniper Rifle with Stock,Scope,Bipod & Quad',price: '$204.95', category: 'Category 3', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/11777/71381/well-airsoft-spring-ebr-sniper-rifle-with-folding-stock-scope-bipod-and-quad-ris__37224.1612561218.jpg?c=2' },
    { name: 'Lancer Tactical 5050 Round 0.32g Streamline Airsoft Tracer BB Bottle, Green',price: '$420.00', category: 'Category 3', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/5786/76657/well-mb08-bolt-action-airsoft-sniper-rifle-w-scope-and-bipod-tan__92838.1618405295.jpg?c=2' },
    { name: 'WG 6" Revolver Holster, Nylon',price:'$23.00', category: 'Category 3', image:'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/5803/74700/wg-6-revolver-holster-nylon__75981.1615721608.jpg?c=2' },
    { name: 'Lancer Tactical 5050 Round 0.32g Streamline Airsoft Tracer BB Bottle, Green',price:'$37.49',category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/18834/100242/lancer-tactical-5050-round-0.32g-streamline-airsoft-tracer-bb-bottle-green__39059.1671233351.jpg?c=2' },
    { name: '2G Steel Mesh Half Face Mask, Black w/Skull',price:'$18.40', category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/4995/77036/2g-steel-mesh-half-face-mask-black-w-skull__69937.1618405863.jpg?c=2' },
    { name: 'Airsoft Station 36" Single Gun Bag/Soft Case',price:'$29.95', category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/16371/66556/airsoft-station-36-single-gun-bagsoft-case__83058.1610842537.jpg?c=2' },
    { name: 'Lancer Tactical 300 Round Metal M4 High Capacity Magazine, Gen 2, Black',price:'$18.40', category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/13298/69604/lancer-tactical-300-round-metal-m4-high-capacity-magazine-gen-2-black__79092.1610847433.jpg?c=2' },
    { name: 'Valken Energy Smart Charger for 8.4-9.6v NiMH Batteries',price:'$23.00', category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/5584/76118/valken-energy-smart-charger-for-8.4v-9.6v-nimh-batteries__54056.1618404397.jpg?c=2' },
    { name: 'Elite Force CO2 Magazine for 1911A1 by KWC, 14 Rounds',price:'$49.95', category: 'Category 4', image: 'https://cdn11.bigcommerce.com/s-yck5k/images/stencil/500x230/products/1947/82515/elite-force-co2-magazine-for-1911a1-by-kwc-14-rounds__17974.1628926141.jpg?c=2' },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  
  // Group products into rows of four
  const rows = [];
  let row = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (selectedCategory === 'All' || product.category === selectedCategory) {
      row.push(product);
      if (row.length === 4 || i === products.length - 1) {
        rows.push(row);
        row = [];
      }
    }
  }

  return (
    <div className="container-list">
      <h1 className="text-center">Product List</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 ">
          <button className={`btn-categs btn-lg btn-pink w-100 mb-3   ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => handleCategoryClick('All')}>
            All
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button className={`btn-categs btn-lg btn-pink w-100 mb-3 ${selectedCategory === 'Category 1' ? 'active' : ''}`} onClick={() => handleCategoryClick('Category 1')}>
          Airsoft Pistols
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button className={`btn-categs btn-lg btn-pink w-100 mb-3 ${selectedCategory === 'Category 2' ? 'active' : ''}`} onClick={() => handleCategoryClick('Category 2')}>
          Airsoft Rifles
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button className={`btn-categs btn-lg btn-pink w-100 mb-3 ${selectedCategory === 'Category 3' ? 'active' : ''}`} onClick={() => handleCategoryClick('Category 3')}>
          Airsoft Snipers
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button className={`btn-categs btn-lg btn-pink w-100 mb-3 ${selectedCategory === 'Category 4' ? 'active' : ''}`} onClick={() => handleCategoryClick('Category 4')}>
            Others
          </button>
        </div>
      </div>
      <div>
      {rows.map((row, i) => (
        <div className="row" key={i}>
          {row.map((product) => (
            <div className="col-md-3" key={product.name}>
              <ProductCard product={product}  price={product.price} />
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
export default ProductList;