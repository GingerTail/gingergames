import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/main";
import LoginPage from "./Components/Login";
import GamesCategory from "./Components/GamesCategory";
import NavBar from "./Components/Navbar";
import {connect} from "react-redux"
import Footer from "./Components/Footer";
import InfoGame from "./Components/infoGame";

const mapStateToProps = reduxStore => {
  console.log(reduxStore)
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
      fetchData:()=>
      dispatch(handleFetchData())
})

const handleFetchData= () =>{
  return async function(
      dispatch,
      getState
  ){
      var response = await fetch("https://gingergame-server.herokuapp.com/games",  {method: "GET" });
      if(response.ok){
          console.log("Product GET Successfully");
              var result= await response.json()
      }else{
          alert("Product NOT GET Successfully");
      }
      dispatch({
          type:"STORE_DATA",
          payload: result
      })
  }
}

class RouterPage extends Component {

  componentWillMount = async () =>{  
    await this.props.fetchData();

} 

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => (
           <>
           <NavBar/>
        <Main />
           <Footer/>
        </>)}
        />
        <Route path="/login" render={() => <LoginPage />}/>
          <Route path="/category/:cat"render={() => (
           <>
           <NavBar/>
        <GamesCategory/>
        <Footer/>
        </>)} />
        <Route path="/detail/:idGame" render={() => 
        <>
         <NavBar/>
        <InfoGame/>
       {/*  <Footer/> */}
        </>} />
      </Router>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterPage);
