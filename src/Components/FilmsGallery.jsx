// importo i ''componenti'' necessari

import { Component } from "react";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class FilmsGallery extends Component {
 state = {
  arrayFilms: [],
  isLoading: true,
  loadingError: false,
  errorMessage: "",
 };

 // fetch dei film dall'api (url ricevuta tramite prop in App)

 fetchFilms = () => {
  fetch(this.props.url)
   .then((response) => {
    if (response.ok) {
     return response.json();
    } else {
     throw new Error(response.status);
    }
   })
   .then((objOfFilms) => {
    this.setState({
     arrayFilms: objOfFilms.Search,
     isLoading: false,
    });
   })

   .catch((err) => {
    console.log(err);
    this.setState({
     isLoading: false,
     loadingError: true,
     errorMessage: err,
    });
   });
 };

 componentDidMount() {
  this.fetchFilms();
 }

 render() {
  console.log("errore ", this.state.errorMessage);
  return (
   <>
    {/* Spinner caricamento */}
    {this.state.isLoading ? (
     <Spinner animation="grow" />
    ) : //  Controllo i vari State per generare il render di conseguenza, ci sono dei bug in caso di url particolari come ad esempio troppi spazi nella ricerca
    this.state.loadingError ? (
     <Alert variant="danger">{this.state.errorMessage.toString()}</Alert>
    ) : (
     // se tutti gli state di errore sono ''negativi" avvio il map sull'array
     this.state.arrayFilms.map((film) => (
      <Col key={film.imdbID}>
       <img
        className=" img-thumbnail h-100"
        src={film.Poster}
        alt="immagine film"
       />
      </Col>
     ))
    )}
   </>
  );
 }
}
export default FilmsGallery;
