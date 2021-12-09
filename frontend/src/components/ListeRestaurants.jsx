import React, {Component} from "react";
import axios from "axios";
import logo from './../logo.svg';

class ListeRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeResto: [],
      listeProduits : [],
      codePostal:"",
      restaurantsLoaded: false,
      produitsLoaded: false,
      requeteCurrentlyLoading: false,
    };
  }


  handleChange = (e) => {

    let currentComponent = this;

    //this.setState({ codePostal: e.target.value });
    axios
      .post("http://localhost:8000/listeResto/",{codePostal:e.target.value})
      .then(function (response){
        currentComponent.setState({listeResto : response.data,restaurantsLoaded : true})
      })
      .catch((err) => console.log(err));
  };

  handleClick(e,element_id) {

    let currentComponent = this;
    e.preventDefault();
    console.log('Le lien a été cliqué pour le resto ' + element_id);
    var calories = this.props.actualCal
    this.setState({requeteCurrentlyLoading: true})
    axios
    .post("http://localhost:8000/fromRestoToMenu/",{restaurant : element_id.toString() ,calories : calories})
    .then(function (response){
      currentComponent.setState({listeProduits : response.data,produitsLoaded : true,requeteCurrentlyLoading:false})
      console.log(response)
    })
    .catch((err) => console.log(err));

  }

  render() {
    
    return (

      <>
        <p>Renseignez le code postal des restaurants</p>
        <input
        type="text"
        placeholder="code postal"
        name="cp"
        
        onChange={this.handleChange}
        />
      
      {this.state.restaurantsLoaded &&
        
        <div>{
        this.state.listeResto.map((element, i) => {     
          console.log(element); 
          // Affichage
          return (
            <table key={element.id}>
              <tbody>
              <tr>
      
                <td > <img class="img_resto" src={element.logo} alt={element.nom}/> </td>
                <td> {element.nom} </td>
                <td><button onClick={(e) => this.handleClick(e, element.id)} style={{borderRadius: "15px",backgroundColor: "#61dafb",color: "white",padding: "5px",paddingLeft: "20px",paddingRight: "20px"}} href="google.com"> Commandez dans ce restaurant </button></td>

              </tr>
              </tbody>
            </table>
          ) 
       })
      } </div>

          
      }
      
      {this.state.produitsLoaded &&

              <div><h2>Menu</h2>{
                this.state.listeProduits.map((element, i) => {     
                  console.log(element); 
                  // Affichage
                  return (
                    <table key={element.id}>
                      <tbody>
                      <tr>
                        <td> <img class="img_produit" src={element.image} alt={element.nom}/> </td>
                        <td> {element.nom} </td>
                        <td> ({element.cal} kcal) </td>
        
                      </tr>
                      </tbody>
                    </table>
                  ) 
               })
              } </div>
      
      }

      { this.state.produitsLoaded &&  this.state.listeProduits.length===0 &&

      <p>Il n'y a aucun menu ou produit qui correspond à votre demande</p>

      }

      { !this.state.produitsLoaded && this.state.requeteCurrentlyLoading &&

        <img src={logo} className="App-logo" alt="logo" />


      }
      </>
    );
  }
}

export default ListeRestaurants;