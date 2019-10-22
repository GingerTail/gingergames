import React, { Component } from "react";
import "../stylesheets/GamesCategory.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom';
import Cards, { CardsFull } from "./Cards";
import FilterNavs from "./FilterNavs";

const mapStateToProps = reduxStore => {
  console.log(reduxStore)
  return reduxStore;
};

 class GamesCategory extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }

  
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

showParams = () =>{
  console.log(this.props.match.params)
}

  render() {
    return (
      <div className="mb-4 container game-cat-container">
       <div class="row input-group">  
       <div className="w-100">
    <Dropdown className="d-inline" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret className="btn-green" id="filter-sbar">
          All Games
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Action</DropdownItem>
          <DropdownItem>Adventure</DropdownItem>
          <DropdownItem >Indies</DropdownItem>
          <DropdownItem>Simulation</DropdownItem>
          <DropdownItem>Strategy</DropdownItem>
          <DropdownItem>RPG</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <input type="text" className="ml-0 search-input" placeholder="Search.."/>
           </div>  
	</div>
        <div className="row mt-5">
            <div className=" col-sm-3">
            <FilterNavs/>
            </div>
            <div className="col-sm-9">
                <div className="row">
                {this.props.gameList.map((game, index) =>{
                  return(
                    <div className="col-12">
                      <div className="row game-col">
                        <div className="col-3">
                          <img src={game.src} className="img-fluid"/>
                        </div>
                        <div className="col-9">
                          <p>{game.title}</p>
                          <div className="float-right">
                            <p>{game.price}</p>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      </div>
               
                    )
                })}
                </div>
            </div>
        </div>
     
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(GamesCategory));
