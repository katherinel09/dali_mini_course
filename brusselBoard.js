import React, { Component } from 'react';
import { Map } from 'immutable';
import BrusselPosting from './BrusselPosting';
import * as db from './datastore';

class BrusselBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {brussels: Map(), brusselID: 0, newBrusselName: "", newBrusselImage: "", showAddBruseel: false}
    }

    componentDidMount() {
        db.fetchBrussels(this.fetchedBrussels);
    }

    fetchedBrussels = (allBrussels) => {
        this.setState({brussels : allBrussels})
    }

    newBrusselNameFunction = (event) => {
        this.setState({newBrusselName: event.target.value})
    }

    newBrusselImageFunction = (event) => {
        this.setState({newBrusselImage: event.target.value})
    }

    saveBrusselInfo = () => {
        db.addBrussel(this.state.newBrusselName, this.state.newBrusselImage)

        this.setState({
            showAddBruseel: false,
            newBrusselName: "", 
            newBrusselImage: "",
        })

        db.fetchBrussels(this.fetchedBrussels);
    }

    delete = (id) => {
        debug.removeBrussel(id);
        db.fetchBrussels(this.fetchedBrussels);
    }

    save = (id, field) => {
        db.updateName(id, name);
        db.fetchBrussels(this.fetchedBrussels);
    }

    showAddBrussel = () => {
        this.setState({showAddBrussel: true})
      }
  

    render() {
        console.log(this.state.brussels)
        const allBrussels = this.state.brussels.entrySeq().map(
            ([id, brussel]) => {
            return <BrusselPosting 
                    delete={this.delete} 
                    save = {this.save}
                    name={brussel.name}
                    id={id}/>
        }
    )
        return (
            <div>
                <p> This is the brussel board </p>
                <p> Add a brussel sprout recipe! </p>
                <p>Enter the name of the recipe: </p>
                <input type="text" value={this.state.newBrusselName} onChange={this.newBrusselNameFunction}/>             
                {allBrussels}
                <button onClick={this.saveBrusselInfo}>Save</button>
            </div>
        )
    }
}

export default BrusselBoard;

