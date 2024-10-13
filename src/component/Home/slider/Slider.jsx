import React from 'react'
import { Link} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Slider() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
    <div>
      
      <div className="container-fluid">
        <div className="row">
            <div className="d-flex justify-content-between">
            <h3 className="best-product justify-content-start mx-4">Best AI Companies</h3>
          <Link to ='/product'><button className="view-more btn btn-primary me-4">View More</button></Link>
            </div>
          
            <Carousel responsive={responsive}>
                <div className="image-box mt-3">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-458610713-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
                    
              
             
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420_11zon (1).jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/pexels-photo-164572.jpeg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1214496805-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-484763223-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">This Is Ai Companies</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
            </Carousel>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
            <div className="d-flex justify-content-between">
            <h3 className="best-product justify-content-start mx-4">Best AI Featured Company</h3>
          <Link to ='/aitoolproduct'><button className="view-more btn btn-primary me-4">View More</button></Link>
            </div>
          
            <Carousel responsive={responsive}>
                <div className="image-box mt-3">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-960916500-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$90.00</h6>
             </div>
                    </div>
                </div>
                
                    
              
             
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1340089698-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$86.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1032783502-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$76.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/pexels-photo-164572.jpeg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$86.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$36.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1214496805-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$46.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-484763223-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
            </Carousel>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
            <div className="d-flex justify-content-between">
            <h3 className="best-product justify-content-start mx-4">Best AI Tool </h3>
            <Link to = '/listing'><button className="view-more btn btn-primary me-4">View More</button></Link>
            </div>
          
            <Carousel responsive={responsive}>
                <div className="image-box mt-3">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-960916500-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$90.00</h6>
             </div>
                    </div>
                </div>
                
                    
              
             
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1340089698-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$86.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1032783502-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$76.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/pexels-photo-164572.jpeg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$86.00</h6>
             </div>
                    </div>
                </div>
                
                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$36.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-1214496805-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$46.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-484763223-1024x1024.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>

                <div className="image-box">
                <div className="image-slider">
                    <img src={`${process.env.PUBLIC_URL}/image/istockphoto-184962061-612x612.jpg`} alt="My Image" />
             <div className="price">
                <h4 className="title d-flex mt-2 justify-content-start">Best AI Featured Company</h4>
                <h6 className="text-price text-center mt-3">$56.00</h6>
             </div>
                    </div>
                </div>
                
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Slider
