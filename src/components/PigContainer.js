import React from 'react';
import PigCard from './PigCard'


class PigContainer extends React.Component {
    // constructor(){
    //     super()
    //     this.state={
    //     pigs: []
    // }
    // }
    // state={
    //     hiddenPigs: []
    // }
    // componentDidMount(){
    //     this.setState({pigs: this.props.pigs})
    // }
    

   

    renderPigs = () => {
        // let goodPigs=[]
        // if(this.state.hiddenPigs.length>1){
        //     this.state.hiddenPigs.forEach(hp=>{
        //     this.props.pigs.forEach(pig=>{
        //         if(hp.name!=pig.name){
        //             goodPigs=[...goodPigs, pig]
        //         }
        //     })
        // })
        // return goodPigs.map((pig , index)=> <PigCard {...pig} key={index} hidePig={this.hidePig}/>)
        // } else
         return this.props.pigs.map((pig , index)=> <PigCard {...pig} key={index} hidePig={this.props.hidePig}/>)
    }

    render() {
        
        return (
            <div className="ui grid container">
                 {this.renderPigs()}
            </div>
           
        )
    }
}

export default PigContainer;