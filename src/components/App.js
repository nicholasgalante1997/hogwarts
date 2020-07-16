import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigContainer from "./PigContainer";

class App extends Component {
  state = {
    pigs: [],
    filter: false,
    sort: ''
}

fetchAllPigs = () => {
    fetch(`http://localhost:3001/hogs`)
    .then(resp => resp.json())
    .then(pigs => {
        this.setState({pigs: pigs})
    })
}

componentDidMount(){
    this.fetchAllPigs()
}

hidePig=(name)=>{
  this.setState({pigs: this.state.pigs.filter(pig=> pig.name!=name)})
}

sortHandler=(e)=>{
this.setState({sort: e.target.value})
}

sortByWeight=()=>{
 return this.state.pigs.sort(function (a, b) {
   let weightA=a.weight
   let weightB=b.weight
   if(weightA<weightB){
     return -1
   }
   if(weightB<weightA){
     return 1
   }
    
  })
}
sortByName=()=>{
 return this.state.pigs.sort((a, b)=> {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  })
}

 sortedPigs=()=>{
  switch(this.state.sort){
    case "": return this.state.pigs
    case "weight": return this.sortByWeight()
    case "name": return this.sortByName()
    default: return this.state.pigs
  }
}

filterHandler=()=>{
  this.setState({filter: !this.state.filter})
}

filterPigs=()=>{
  if(this.state.filter){
    return this.sortedPigs().filter(pig=>{
      if(!pig.greased){
        return pig
      }
    })
  }
  else {return this.sortedPigs()}
}
  render() {
    console.log(this.sortByWeight(), this.state.sort)
    return (
      <div className="App">
        <Nav filterHandler={this.filterHandler} sortHandler={this.sortHandler}/>
        <PigContainer pigs={this.filterPigs()} hidePig={this.hidePig}/>
      </div>
    );
  }
}

export default App;
