import "./Hero.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import imageProfile from "../../assets/images/david-clode-MNEGikPGkAM-unsplash.png";
import iconReact from "../../assets/icons/icons8-react-native-240.png";
import iconHtml from "../../assets/icons/icons8-html-240.png";
import iconCSS from "../../assets/icons/icons8-css-240.png";
import iconJavascript from "../../assets/icons/icons8-javascript-240.png";
import { useTranslation } from 'react-i18next';


function Hero() {

  const { t  } = useTranslation('global');

  return (
    <Container id="hero" fluid className="p-0 m-0">
      <div className="content__hero">
        <Row className="d-flex align-content-center">
          <Col className="content__title__hero p-0">
            <h1 className="title__hero">{t("hero.title-hero")}</h1>  
            <h3 className="subtitle__hero">{t("hero.subtitle-hero")}</h3>
            <div className="icons__group">
              <Image src={iconReact} alt='Icon React' className="icons" />
              <Image src={iconHtml} alt='Icon Html5' className="icons" />
              <Image src={iconCSS} alt='Icon CSS3' className="icons" />
              <Image src={iconJavascript} alt='Icon Javascript' className="icons" />
            </div>
          </Col>
         
          <Col className="p-0">
            <Image 
              src={imageProfile} 
              alt='Image Profile' 
              className="image__profile__hero"
            />
          </Col>
        </Row>
      </div>
     
    </Container>
  );
};

export default Hero;
