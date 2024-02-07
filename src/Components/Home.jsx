import { Row } from "react-bootstrap";
import FilmsGallery from "./FilmsGallery";

const Home = () => {
 return (
  <>
   <h4>Trending Now</h4>
   <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-5">
    <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482&s=Ciao" />
   </Row>
   <h4>Watch it Again</h4>
   <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-5">
    <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482&s=Pixar" />
   </Row>
   <h4>New Releases</h4>
   <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-5">
    <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482&s=Action" />
   </Row>
  </>
 );
};

export default Home;
