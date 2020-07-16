import React, {Component} from 'react';
import PigCard from './PigCard'


class PigContainer extends React.Component {
    state = {
        pigs: []
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

    renderPigs = () => {
        return this.state.pigs.map(pig => <PigCard {...pig}/>)
    }

    render() {
        console.log(this.state.pigs)
        return (
            <div className="ui grid container">
                 {this.renderPigs()}
            </div>
           
        )
    }
}

export default PigContainer;