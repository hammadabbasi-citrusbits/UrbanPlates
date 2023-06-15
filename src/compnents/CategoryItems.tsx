import React from 'react';
import { useLocation } from 'react-router-dom';
import MainNavbar from './MainNavBar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Footer';


const CategoryItems = () => {
    const {state:category}:any=useLocation();
    // console.log(category)

const images = [
    { id: 1, src: 'src/assets/downslider2.jpg', alt: 'Slider 1' },
    { id: 2, src: 'src\assets\card1.jpg', alt: 'Slider 2' },
    { id: 3, src: 'src\assets\card1.jpg', alt: 'Slider 3' }
  ];
  return (
    <>
    <MainNavbar/>
    <div style={{marginTop:"4%"}}>
    <div style={{ height: "50%", width: "100%", marginTop: "20%" }}>
        <Carousel autoPlay={true}>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
     <div>
        <div style={{ display: "grid", justifyContent: 'center', gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", padding: "10%", gap: "30px", alignContent: "center" }}>
       {category?.items?.map((item: any) => (
        <div key={item.item_id} >
                <div style={{ backgroundColor: "white", width: "100%", height: "179px", marginTop: "10px" }}>
                    <div style={{ marginTop: "5px" ,textAlign: "center", color: "black" }}>
                        <img src={item.image_urls.thumbnail}></img>
                        {/* {item.item_id} */}
                    </div>
                  </div>
                  <div style={{display:"flex", justifyContent:"center"}}>
                  <h5 style={{color:"black", justifyContent:"right"}}>{item.name}</h5>
                  </div>
        </div>
      ))}
      </div>
    </div>
    </div>
    <Footer/>

    </>
  );
};

export default CategoryItems;


//   if (!category?.category_id) {
//     return <div>No category selected</div>;
//   }

//   const selectedCategory = plates[0].categories.find((category: any) => category.category_id === categoryId);