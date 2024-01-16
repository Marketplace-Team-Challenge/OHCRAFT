import Slider from "react-slick";
import heroImg from "../../IMG/images/heroDesktop.png";
import heroImg375 from "../../IMG/images/hero375.png";
import heroImg480 from "../../IMG/images/hero480.png";
import heroImg768 from "../../IMG/images/hero768.png";
import './Hero.scss';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
     };

     const slides = [
        {
            title: 'Slider 1',
            imageURL: `${heroImg}`,
            alt: 'banner',
            // description: '10% з продажу на потреби ЗСУ',
        },
        {
            title: 'Slider 2',
            imageURL: `${heroImg}`,
            alt: 'banner',
            // description: '10% з продажу на потреби ЗСУ',
        },
        {
            title: 'Slider 3',
            imageURL: `${heroImg}`,
            alt: 'banner',
            // description: '10% з продажу на потреби ЗСУ',
        },
        {
            title: 'Slider 4',
            imageURL: `${heroImg}`,
            alt: 'banner',
            // description: '10% з продажу на потреби ЗСУ',
        },
     ]
    return(
        <section>
              <Slider {...settings}>
                  {slides.map(item => (
                     <div key={item.title} className="slider-img-container">
                        <img src={item.imageURL} alt={item.alt} className="slider-img"
                        
                        // srcSet={`${heroImg375} 375w,`}  
                        // sizes="(min-width: 375px) 375px,
                        // (min-width: 480px) 480px,
                        // (min-width: 768px) 768px"
                        
                        ></img>
                        {/* <div className="slider-img"></div> */}
                           <div className="slider-title-container">
                                <p className="slider-title-first-word">10%</p>
                                <p className="slider-title-second-part">з продажу на потреби ЗСУ</p>
                           </div>
                        </div>
                  ))}
               </Slider>
        </section>
    );
}