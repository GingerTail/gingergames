import React, { Component } from "react";
import "../stylesheets/GamesCategory.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cards, { CardsFull } from "./Cards";
import FilterNavs from "./FilterNavs"

const mapStateToProps = reduxStore => {
  console.log(reduxStore);
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
  toggleFilter:(event) =>
  dispatch(handleFilter(event))
})

const handleFilter= (event) =>{
  return async function(
    dispatch,
    getState
){
  var filter= event
  console.log(filter)
  dispatch({
    type:"FILTER_NAV",
    payload: event
})
}
}

class GamesCategory extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      filter: ""
    };
    
  }

  componentWillMount = async () =>{  
    var cat = this.props.match.params.cat
    await this.props.toggleFilter(cat);

} 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  showParams = () => {
    console.log(this.props.match.params);
  };

  render() {
    return (
      <div className="mb-4 container game-cat-container">
        <div class="row input-group">
          <div className="w-100">
            <input
              type="text"
              className="ml-0 search-input"
              placeholder="Search.."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className=" col-sm-3">
            <FilterNavs />
          </div>
          <div className="col-sm-9">
            <div className="row">
            {this.props.gameList.length > 0 && 
                                 this.props.gameList.filter(
                                     game => game.genre.includes(this.props.filter)
                                 ).slice(0,10).map(game =>{
                                  return (
                                    <div className="col-12">
                                      <div className="row mb-3">
                                          <div className="col-12 col-sm-3">
                                          <img src={game.src} className="" width="200px" height="120px"/>
                                            </div> 
                                          <div className="col-12 col-sm-9">
                                          <p className="">{game.title}</p>
                                          <div className="float-right">
                                            <p>{game.price}</p>
                                          </div>
                                            </div>
                                      <hr />
                                    </div>
                                        </div>
                                  );
                                })
                                } 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,  mapDispatchToProps)(GamesCategory));
