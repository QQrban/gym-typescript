import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import slide4 from "@/assets/slide4.jpg";
import slide5 from "@/assets/slide5.jpg";
import slide6 from "@/assets/slide6.jpg";


const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };

    return (
        <Slider {...settings} className="mt-9 md:w-[650px] mx-auto z-10">
            {slides.map((slide, i) => (
                <div key={i}>
                    <img className="mx-auto w-full" src={slide} alt="slide" />
                </div>
            ))}
        </Slider>
    );
}

export default Carousel