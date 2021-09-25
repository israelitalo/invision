import { Container } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImageOne from '../../assets/Data.png';
import ImageTwo from '../../assets/Data2.png';

export const LeftContainer = () => {
    return (
        <Container>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <div style={{ height: '100%' }}>
                    <img src={ImageOne} alt="image1" style={{ height: 'auto', objectFit: 'cover' }} />
                </div>
                <div style={{ height: '100%' }}>
                    <img src={ImageTwo} alt="image2" style={{ height: 'auto', objectFit: 'cover' }} />
                </div>
            </Carousel>
        </Container>
    );
};