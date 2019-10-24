import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../stylesheets/infoGame.css"
import Multicar from './multiCarousel';

const mapStateToProps = reduxStore => {
  console.log(reduxStore);
  return reduxStore;
};

class InfoGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: []
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.idGame);
    this.setState({ game: this.props.gameList });
    console.log(this.state.game);
  };

  render() {
    return (
      <>
      <div className="container banner text-center">
  <a href="">
                <img
                  src="http://image.en.yibada.com/data/thumbs/full/32858/685/0/0/0/clash-of-clans-is-a-2012-freemium-mobile-mmo-strategy-video-game-developed-and-published-by-supercell-a-video-game-company-based-in-helsinki-finland.png"
                  className="animated fadeIn"
                  alt="Responsive image"
                  width="600px"
                  height="200px"
                />
              </a>
      </div>
        {this.props.gameList
          .filter(filter => filter._id == this.props.match.params.idGame)
          .map(game => {
            return (
              <div className="info-game-container">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={game.src}
                      alt={game.title}
                      className="w-100 mb-3"
                    />
                  </div>
                  <div className="col-sm-6">
                    <Multicar id={game._id}/>
                    <div id="info-game-text">
                    <h1>{game.title}</h1>
                <p> 
                <strong>Description: </strong>{game.description} </p>
                  <div className="info-game-detail">
                  <div id="info-game-price">
                    <h2><strong>Price: </strong>{game.price}</h2>
                    <button className="btn btn-green mr-5" value="addCart">Add to cart</button>
                  </div>
                <p>
                  <strong>Company: </strong>{game.Company} <br/>
                    <strong>Platform: </strong>{game.platform} <br/>
                    <strong>Genre: </strong>{game.genre} <br/>
                </p>
                  </div>
                    </div>
                  </div>
                </div>
              
              </div>
            );
          })}
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(InfoGame));
