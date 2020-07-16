import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans    </span> 
            <div className="ui toggle checkbox">
            <input onChange={props.filterHandler} type="checkbox" name="grease"/>
            <label>Say No Grease!</label>
          </div>
              <select className='ui dropdown' onChange={props.sortHandler}>
                <option value="">select</option>
                <option value='weight'>Weight</option>
                <option value='name'>Name</option>
              </select>   
    </div>
  );
};

export default Nav;
