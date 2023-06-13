import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button, TextField } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Footer from './Footer';
import RegularMenu from './mainCategoriesItems';
import PlatePassMenu from './mainCategories';
import CategoryItems from './CategoryItems';

const images = [
  { id: 1, src: 'src/assets/slider1.jpg', alt: 'Slider 1' },
  { id: 2, src: 'src/assets/slider2.jpg', alt: 'Slider 2' },
  { id: 3, src: 'src/assets/slider3.jpg', alt: 'Slider 3' }
];

// const plates_ = [
//   { id: 1, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 2, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 3, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 4, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 5, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 6, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 7, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 8, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 9, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 10, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 11, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 12, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 13, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 14, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 15, src: 'src/assets/card1.jpg', name: 'Plate' },
//   { id: 16, src: 'src/assets/card1.jpg', name: 'Plate' },
// ];

const Main: React.FC = () => {
  const navigate=useNavigate();
  const [plates,setPlates]=useState<any>([]);
  useEffect(()=>{
    getPlates();
  },[]);
  const getPlates=async()=>{
try {
  const res= await fetch('https://urban-staging.novadine.com/api/v2/stores/000/menus?service_type_id=2&skip_pick_lists=true');
  const data= await res.json();
  console.log(data);
  setPlates(data);
} catch (error) {
  console.log(error)
}
  }
// const [selectedId, setSelectedId] = useState<string | null>(null);
// // const [selectedType, setSelectedType] = useState<'menu'|'category'|'item'>('menu');

// const handleClick = (itemId : any) => {
//   setSelectedId(itemId);
//   };
const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  return (
    <>
      <div style={{ height: "50%", width: "100%", marginTop: "30px" }}>
        <Carousel autoPlay={true}>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
      <div style={{ width: "100%", height: "45px", display: "flex", justifyContent: "space-evenly" }}>
        <Button style={{ width: "45%", backgroundColor: "green", color: "white" }}>Order Now</Button>
        <Button style={{ width: "45%", border: "3px solid green", textAlign: "center", color: "green" }}>Explore Menu</Button>
      </div>
      <hr style={{ marginTop: "30px" }}></hr>
      <div style={{ marginTop: "30px", width: "100%", height: "auto", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "30px", width: "50%", height: "auto", display: "flex", justifyContent: "space-evenly" }}>
          <NavLink to='#' style={{ fontSize: "large", color: "grey" }}><b>menu</b></NavLink>
          <NavLink to='#'  style={{ fontSize: "large", color: "grey" }}><b>plates</b></NavLink>
          <NavLink to='#' style={{ fontSize: "large", color: "grey" }}><b>salads</b></NavLink>
          <NavLink to='#' style={{ fontSize: "large", color: "grey" }}><b>sandwiches</b></NavLink>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: "10px" }}>
  <div style={{ display: "grid", justifyContent: 'center', gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(5, 1fr)", padding: "30px", gap: "30px", marginTop: "30px", width: "75%", alignContent: "center" }}>
    {plates.length > 0 && (
      plates[0].categories.map((category) => (
        <Link
          key={category.category_id}
          to={`/plate/${category.category_id}`} 
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{ backgroundColor: "lightcoral", width: "100%", height: "250px", marginTop: "10px" }}
          >
            <div style={{ marginTop: "5px", textAlign: "center", color: "black" }}>
              {category.name}
            </div>
          </div>
        </Link>
      ))
    )}
  </div>
</div> */}

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: "10px" }}>
        <div style={{ display: "grid", justifyContent: 'center', gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(5, 1fr)", padding: "30px", gap: "30px", marginTop: "30px", width: "75%", alignContent: "center" }}>
          {plates.length > 0 && (
            plates[0].categories.map((category:any) => (
              <div
                key={category.category_id}
                // style={{ cursor: 'pointer' }}
                onClick={() =>
                  //  setSelectedCategoryId(category.category_id)
                  navigate(`/plate/${category?.category_id}`,{state:category})
                  }
              >
                {/* <Link
                  to={`/plate/${category.category_id}`} 
                  style={{ textDecoration: 'none' }}
                > */}
                  <div
                    style={{ backgroundColor: "lightcoral", width: "100%", height: "250px", marginTop: "10px" }}
                  >
                    <div style={{ marginTop: "5px", textAlign: "center", color: "black" }}>
                      {category.name}
                    </div>
                  </div>
                {/* </Link> */}
              </div>
            ))
          )}
        </div>
      </div>

      <CategoryItems categoryId={selectedCategoryId} plates={plates} />

      <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px auto", maxWidth: "600px" }}>
        <h3 style={{ color: "green", fontFamily: "Verdana, Geneva", fontSize: "14pt", marginBottom: "10px" }}>
          JOIN OUR NEWSLETTER
        </h3>
        <p style={{ color: "green", marginBottom: "10px" }}>
          Sign up to be in the know on new menu items, exclusive events, restaurant openings, and more.
        </p>
        <TextField style={{ width: "100%", marginBottom: "10px" }} type='text' placeholder='Enter Your Email'>
        </TextField>
        <Button style={{ width: "100%", backgroundColor: "green", color: "white" }} type='submit' value="Subscribe" >Subscribe</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px auto", maxWidth: "600px" }}>
        <h3 style={{ textAlign: "center", fontFamily: "Verdana Geneva", fontSize: "14pt", color: "green" }}>
          DOWNLOAD OUR APP
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <a href="https://play.google.com/store/apps/details?id=com.urbanplates.urbanplates" target="_self">
              <img
                className="vc_single_image-img"
                title="google-app-btn"
                src="https://urbanplates.com/wp-content/uploads/2022/03/google-app-btn-200x66.png"
                alt="google-app-btn"
                width="200"
                height="66"
              />
            </a>
          </div>
          <div>
            <img
              className="vc_single_image-img attachment-full"
              src="https://urbanplates.com/wp-content/uploads/2022/03/up-phone-app-homepage.png"
              alt="Urban Plates Phone App"
              width="239"
              height="281"
            />
          </div>
        </div>
      </div>
      </div>
      <div style={{ textAlign: "center", color: "black", marginTop: "20px", marginBottom: "20px" }}>
        <p>
          <b>
            Welcome, one and all, to our table. Where craveable food is cooked from scratch with quality ingredients.
            Where it's sustainably grown, ethically treated, and made to order. All at prices that won’t break the bank.
            Our secret? There isn't one. We're fueled by the power of real food and a passion to change the way the world eats,
            one plate at a time. A movement so easy to join, you can do it by lifting a fork. Everyone deserves to eat this good.
          </b>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Main;
