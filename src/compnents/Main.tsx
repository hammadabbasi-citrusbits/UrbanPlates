import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import Link from 'antd/es/typography/Link';

import Footer from './Footer';
import MyApp from './Carousel';

const images = [
  { id: 1, src: 'src/assets/slider1.jpg', alt: 'Slider 1' },
  { id: 2, src: 'src/assets/slider2.jpg', alt: 'Slider 2' },
  { id: 3, src: 'src/assets/slider3.jpg', alt: 'Slider 3' }
];

const plates = [
  { id: 1, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 2, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 3, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 4, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 5, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 6, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 7, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 8, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 9, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 10, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 11, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 12, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 13, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 14, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 15, src: 'src/assets/card1.jpg', name: 'Plate' },
  { id: 16, src: 'src/assets/card1.jpg', name: 'Plate' },
];

const Main: React.FC = () => {
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
      <div style={{ width: "100%", height: "20px" }}>
        <Button style={{ width: "50%", backgroundColor: "green", color: "white" }}>Order Now</Button>
        <Button style={{ width: "50%", border: "2px solid green", textAlign: "center" }}>Explore Menu</Button>
      </div>
      <hr style={{ marginTop: "30px" }}></hr>
      <div style={{ marginTop: "30px", width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly" }}>
        <Link>menu</Link>
        <Link>plates</Link>
        <Link>salads</Link>
        <Link>sandwiches</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: "10px" }}>
        <div style={{ display: "grid", justifyContent: 'center', gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(5, 1fr)", padding: "30px", gap: "30px", marginTop: "30px", width: "75%", alignContent: "center" }}>
          {plates.map((plate) => (
            <a key={plate.id}>
              <div style={{ backgroundColor: "lightcoral", width: "100%", height: "250px", marginTop: "10px" }}>
                <img src={plate.src} width='320px' height='250px' alt="Plate" />
                <div style={{ marginTop: "5px", textAlign: "center", color: "black" }}>{plate.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 1 }}>
            <div>
                <h3 style={{ textAlign: "center", color: "green" }}>
                <span style={{ fontFamily: "Verdana, Geneva;", fontSize: "14pt" }}>
                    JOIN OUR NEWSLETTER
                </span>
                </h3>
                <p style={{ textAlign: "center", color: "green" }}>
                Sign up to be in the know on new menu items exclusive events, restaurant openings and more.
                </p>
                <input type='text' placeholder='Enter Your Email' style={{ width: "100%" }}></input>
                <input type='submit' style={{ width: "100%" }}></input>
            </div>
            </div>


            <div style={{ flex: 1 }}>
          <div
            className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-lg vc_hidden-md vc_col-has-fill nk-awb"
            style={{ width: "50%" }}
          >
            <div className="vc_column-inner vc_custom_1647545074999">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h3 style={{ textAlign: "center" }}>
                      <span style={{ fontFamily: "Verdana Geneva", fontSize: "14pt", color: "green" }}>
                        DOWNLOAD OUR APP
                      </span>
                    </h3>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ marginRight: "20px", marginLeft: "200px" }}>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.urbanplates.urbanplates"
                      target="_self"
                    >
                      <img
                        className="vc_single_image-img "
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
            <div
              className="nk-awb-wrap nk-awb-rendered"
              style={{ marginLeft: "-17px", marginRight: "-33.3437px" }}
              data-awb-type="color"
              data-awb-stretch="true"
              data-awb-image-background-size="cover"
              data-awb-image-background-position="50% 50%"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
