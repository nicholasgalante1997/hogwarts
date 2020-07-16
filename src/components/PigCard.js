import React, {Component} from 'react';

class PigCard extends React.Component {

    state = {
        imageTag: ""
    }

    getPigImages = () => {
        this.setState({imageTag: (this.props.name.split(' ').join('_'))})
    }

    componentDidMount(){
        this.getPigImages()
    }

    render() {
        console.log(this.props)
        console.log(this.state.imageTag)
        return (
            <div className="ui eight wide column">
                <h2>Name: {this.props.name}</h2>
                {/* <img src='../public/hog-imgs/${this.state.imageTag}.jpg'/> */}

                <img src={`/hog-imgs/${this.state.imageTag}.jpg`}/>
                <small>Weight: {this.props.weight}</small><br></br>
                <small>Specialty: {this.props.specialty}</small><br/>
                <small>Medal: {this.props["highest medal achieved"]} </small><br/>
            </div>
        )
    }
}

export default PigCard;