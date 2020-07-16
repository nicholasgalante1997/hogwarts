import React, {Component} from 'react';
import "../App.css";
class PigCard extends React.Component {

    state = {
        
        front: true  
    }
    
    



    clickHandler=(e)=>{
       
        e.target.innerText.toLowerCase()==='show details'?this.setState({front: false}):this.setState({front: true})
    
    }
    showDetails=(e)=>{
        
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.props.name}</div>
                    <div className="meta">{this.props.specialty}</div>
                    
                        <div className="ui huge header"> <h4 className="ui red inverted huge header">{this.props['highest medal achieved']}</h4> </div>
                        <div className="ui huge header"> <h4 className="ui red inverted huge header">{this.props.weight}lb</h4> </div>
                    <div onClick={this.clickHandler} className="ui basic green button">Back To Basics</div>
                </div>
            </div>
        )
    }

    showName=()=>{
        return (
        <div className="ui link cards">
                            <div className="card">
                                <div className="image">
                                    <img src={`/hog-imgs/${(this.props.name.split(' ').join('_')).toLowerCase()}.jpg`}/>
                                </div>
                            
                            <div className="content">
                                <a className="header">{this.props.name}</a>
                                <br/>
                                <div onClick={this.clickHandler} className="ui basic green button">Show Details</div>
                                <br/>
                                <br/>
                                <div className="ui animated fade button" tabindex="0" onClick={()=>this.props.hidePig(this.props.name)}>
                                <div className="visible content">I don't like seeing this pig!</div>
                                <div className="hidden content">
                                        Hide it
                                </div>
                                </div>
  
                            </div>
                        </div>
                </div>
        )
    }
    render() {
        
        return (
            <div className="ui eight wide column">
                {this.state.front?this.showName():this.showDetails()}
         </div>
        )
    }
}

export default PigCard;