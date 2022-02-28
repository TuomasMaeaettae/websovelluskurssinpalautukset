import './App.css';
import { useState } from 'react';
import ProductListView from './components/ProductListView';
import iphone from './img/iphone.png';
import ipad from './img/ipad.png';
import samsung_galaxyS22 from './img/samsung_galaxyS22.png';
import huaweiP50 from './img/HuaweiP50.png';
import huaweiY9 from './img/huaweiY9.png';
import macBook from './img/macBook.png';
import samsung_galaxyTablet from './img/samsung_galaxyTablet.png';
import samsunglaptop from './img/samsunglaptop.png';
import pattereita from './img/pattereita.png';
import bestseller from './img/bestseller.png';
import Itähteä from './img/Itähteä.png';
import IItähteä from './img/IItähteä.png';
import IIItähteä from './img/IIItähteä.png';
import IIIItähteä from './img/IIIItähteä.png';
import IIIIItähteä from './img/IIIIItähteä.png';

function App() {

  const [kaikkiModeOn, setKaikkiModeOn] = useState(false);
  const [puhelinModeOn, setPuhelinModeOn] = useState(false);
  const [läppäriModeOn, setLäppäriModeOn] = useState(false);
  const [tabletitModeOn, setTabletitModeOn] = useState(false);
  const [appleModeOn, setAppleModeOn] = useState(false);
  const [samsungModeOn, setSamsungModeOn] = useState(false);
  const [huaweiModeOn, setHuaweiModeOn] = useState(false);
  const [tyhjäModeOn, setTyhjäModeOn] = useState(false);

  const [products, setProducts] = useState([
  {
    id: 1,
    title: "Apple iPhone 11 Pro, US Version, 256GB, Silver",
    description: "An apple mobile which is nothing like apple",
    price: 599.99,
    thumbnail: iphone,
    brand: "Apple",
    category: "phones",
    bestseller: bestseller,
    stars: IIIIItähteä
  },
  {
    id: 2,
    title: "Samsung Galaxy S22+ Smartphone, 256GB, 8K Camera & Video - Green",
    description: "An Samsung mobile which is nothing like apple",
    price: 399.99,
    thumbnail: samsung_galaxyS22,
    brand: "Apple",
    category: "phones",
    bestseller: null,
    stars: IIItähteä
  },
  {
    id: 3,
    title: "Huawei P50 Pro 256GB 8GB RAM – Gold",
    description: "An Huawei mobile which is nothing like apple",
    price: 199.99,
    thumbnail: huaweiP50,
    brand: "Huawei",
    category: "phones",
    bestseller: null,
    stars: Itähteä
  },
  {
    id: 4,
    title: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver",
    description: "An apple laptop which is nothing like apple",
    price: 1999.99,
    thumbnail: macBook,
    brand: "Apple",
    category: "laptops",
    bestseller: bestseller,
    stars: IIIItähteä
  },
  {
    id: 5,
    title: "Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 128GB Storage - Silver",
    description: "An Samsung tablet which is nothing like apple",
    price: 799.99,
    thumbnail: samsung_galaxyTablet,
    brand: "Samsung",
    category: "tablets",
    bestseller: null,
    stars: IItähteä
  },
  {
    id: 6,
    title: "Samsung Galaxy Book Pro Intel Evo Platform Laptop Computer 15.6” AMOLED Screen 11th Gen Intel Core i7 Processor 16GB Memory 512GB SSD",
    description: "An Samsung laptop which is nothing like apple",
    price: 1799.99,
    thumbnail: samsunglaptop,
    brand: "Samsung",
    category: "laptops",
    bestseller: null,
    stars: IIItähteä
  },
  {
    id: 7,
    title: "Apple iPad Air 2, 64 GB - Space Gray",
    description: "An Apple tablet which is nothing like apple",
    price: 299.99,
    thumbnail: ipad,
    brand: "Apple",
    category: "tablets",
    bestseller: null,
    stars: IIIItähteä
  },
  {
    id: 8,
    title: "Huawei Y9 2019 JKM-LX3 6.5” HiSilicon Kirin 710 64GB 3GB RAM Dual SIM - Blue",
    description: "An Huawei phone which is nothing like apple",
    price: 99.99,
    thumbnail: huaweiY9,
    brand: "Huawei",
    category: "phones",
    bestseller: bestseller,
    stars: IIIIItähteä
  },
  {
    id: 9,
    title: "Duracell - CopperTop AA Alkaline Batteries - 20 Count",
    description: "Long lasting",
    price: 9.99,
    thumbnail: pattereita,
    brand: "Duracell",
    category: "misc",
    bestseller: bestseller,
    stars: IIIIItähteä
  },
  ]);
  const [productsPuhelimet, setProductsPuhelimet] = useState([
    {
      id: 1,
      title: "Apple iPhone 11 Pro, US Version, 256GB, Silver",
      description: "An apple mobile which is nothing like apple",
      price: 599.99,
      thumbnail: iphone,
      brand: "Apple",
      category: "phones",
      bestseller: bestseller,
      stars: IIIIItähteä
    },
    {
      id: 2,
      title: "Samsung Galaxy S22+ Smartphone, 256GB, 8K Camera & Video - Green",
      description: "An Samsung mobile which is nothing like apple",
      price: 399.99,
      thumbnail: samsung_galaxyS22,
      brand: "Apple",
      category: "phones",
      bestseller: null,
      stars: IIItähteä
    },
    {
      id: 3,
      title: "Huawei P50 Pro 256GB 8GB RAM – Gold",
      description: "An Huawei mobile which is nothing like apple",
      price: 199.99,
      thumbnail: huaweiP50,
      brand: "Huawei",
      category: "phones",
      bestseller: null,
      stars: Itähteä
    },
    {
      id: 8,
      title: "Huawei Y9 2019 JKM-LX3 6.5” HiSilicon Kirin 710 64GB 3GB RAM Dual SIM - Blue",
      description: "An Huawei phone which is nothing like apple",
      price: 99.99,
      thumbnail: huaweiY9,
      brand: "Huawei",
      category: "phones",
      bestseller: bestseller,
      stars: IIIIItähteä
    },
    ]);
    const [productsLäppärit, setProductsLäppärit] = useState([
      {
        id: 4,
        title: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver",
        description: "An apple laptop which is nothing like apple",
        price: 1999.99,
        thumbnail: macBook,
        brand: "Apple",
        category: "laptops",
        bestseller: bestseller,
        stars: IIIItähteä
      },
      {
        id: 6,
        title: "Samsung Galaxy Book Pro Intel Evo Platform Laptop Computer 15.6” AMOLED Screen 11th Gen Intel Core i7 Processor 16GB Memory 512GB SSD",
        description: "An Samsung laptop which is nothing like apple",
        price: 1799.99,
        thumbnail: samsunglaptop,
        brand: "Samsung",
        category: "laptops",
        bestseller: null,
        stars: IIItähteä
      },
      ]);
      const [productsTabletit, setProductsTabletit] = useState([
        {
          id: 5,
          title: "Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 128GB Storage - Silver",
          description: "An Samsung tablet which is nothing like apple",
          price: 799.99,
          thumbnail: samsung_galaxyTablet,
          brand: "Samsung",
          category: "tablets",
          bestseller: null,
          stars: IItähteä
        },
        {
          id: 7,
          title: "Apple iPad Air 2, 64 GB - Space Gray",
          description: "An Apple tablet which is nothing like apple",
          price: 299.99,
          thumbnail: ipad,
          brand: "Apple",
          category: "tablets",
          bestseller: null,
          stars: IIIItähteä
        },
        ]);
        const [productsApple, setProductsApple] = useState([
          {
            id: 1,
            title: "Apple iPhone 11 Pro, US Version, 256GB, Silver",
            description: "An apple mobile which is nothing like apple",
            price: 599.99,
            thumbnail: iphone,
            brand: "Apple",
            category: "phones",
            bestseller: bestseller,
            stars: IIIIItähteä
          },
          {
            id: 4,
            title: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver",
            description: "An apple laptop which is nothing like apple",
            price: 1999.99,
            thumbnail: macBook,
            brand: "Apple",
            category: "laptops",
            bestseller: bestseller,
            stars: IIIItähteä
          },
          {
            id: 7,
            title: "Apple iPad Air 2, 64 GB - Space Gray",
            description: "An Apple tablet which is nothing like apple",
            price: 299.99,
            thumbnail: ipad,
            brand: "Apple",
            category: "tablets",
            bestseller: null,
            stars: IIIItähteä
          },
          ]);
          const [productsSamsung, setProductsSamsung] = useState([
            {
              id: 2,
              title: "Samsung Galaxy S22+ Smartphone, 256GB, 8K Camera & Video - Green",
              description: "An Samsung mobile which is nothing like apple",
              price: 399.99,
              thumbnail: samsung_galaxyS22,
              brand: "Apple",
              category: "phones",
              bestseller: null,
              stars: IIItähteä
            },
            {
              id: 5,
              title: "Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 128GB Storage - Silver",
              description: "An Samsung tablet which is nothing like apple",
              price: 799.99,
              thumbnail: samsung_galaxyTablet,
              brand: "Samsung",
              category: "tablets",
              bestseller: null,
              stars: IItähteä
            },
            {
              id: 6,
              title: "Samsung Galaxy Book Pro Intel Evo Platform Laptop Computer 15.6” AMOLED Screen 11th Gen Intel Core i7 Processor 16GB Memory 512GB SSD",
              description: "An Samsung laptop which is nothing like apple",
              price: 1799.99,
              thumbnail: samsunglaptop,
              brand: "Samsung",
              category: "laptops",
              bestseller: null,
              stars: IIItähteä
            },
            ]);
            const [productsHuawei, setProductsHuawei] = useState([
              {
                id: 3,
                title: "Huawei P50 Pro 256GB 8GB RAM – Gold",
                description: "An Huawei mobile which is nothing like apple",
                price: 199.99,
                thumbnail: huaweiP50,
                brand: "Huawei",
                category: "phones",
                bestseller: null,
                stars: Itähteä
              },
              {
                id: 8,
                title: "Huawei Y9 2019 JKM-LX3 6.5” HiSilicon Kirin 710 64GB 3GB RAM Dual SIM - Blue",
                description: "An Huawei phone which is nothing like apple",
                price: 99.99,
                thumbnail: huaweiY9,
                brand: "Huawei",
                category: "phones",
                bestseller: bestseller,
                stars: IIIIItähteä
              },
              ]);
    
    const [productsTyhjä, setProductsTyhjä] = useState([]);

  let output = <ProductListView products={productsTyhjä} />;

  if(kaikkiModeOn == true) {
    output = <ProductListView products={products} />;
  }
  else if(puhelinModeOn == true) {
    output = <ProductListView products={productsPuhelimet}/>;
  }
  else if(läppäriModeOn == true) {
    output = <ProductListView products={productsLäppärit}/>;
  }
  else if(tabletitModeOn == true) {
    output = <ProductListView products={productsTabletit}/>;
  }
  else if(appleModeOn == true) {
    output = <ProductListView products={productsApple}/>;
  }
  else if(samsungModeOn == true) {
    output = <ProductListView products={productsSamsung}/>;
  }
  else if(huaweiModeOn == true) {
    output = <ProductListView products={productsHuawei}/>;
  }
  else if(tyhjäModeOn == true) {
    output = <ProductListView products={productsTyhjä}/>;
  }

  return (
    <div>
          <div className='Filterbar'>
            <div className='header'>RAJAA HAKUA</div>           
            <form className='täpät'>
               <div>
              <input type="checkbox" onClick={ ()=> setKaikkiModeOn(!kaikkiModeOn)} value="kaikki"></input>
              <label for="kaikki">KAIKKI</label><br></br>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setPuhelinModeOn(!puhelinModeOn)} value="puhelimet"></input>
              <label for="puhelimet">PUHELIMET</label><br></br>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setLäppäriModeOn(!läppäriModeOn)} value="läppärit"></input>
              <label for="läppärit">LÄPPÄRIT</label><br></br>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setTabletitModeOn(!tabletitModeOn)} value="tabletit"></input>
              <label for="tabletit">TABLETIT</label><br></br>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setAppleModeOn(!appleModeOn)} value="apple"></input>
              <label for="apple">APPLE</label>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setSamsungModeOn(!samsungModeOn)} value="samsung"></input>
              <label for="samsung">SAMSUNG</label>
              </div>
              <div>
              <input type="checkbox" onClick={ ()=> setHuaweiModeOn(!huaweiModeOn)} value="huawei"></input>
              <label for="huawei">HUAWEI</label><br></br>
              </div>      
            </form>
          </div>
          { output }
    </div>
  );
}

export default App;
