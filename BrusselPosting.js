import React, { Component } from 'react';

class BrusselPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, newTitle: ""}
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }

    changeNewTitle = (event) => {
        this.setState({newTitle: event.target.value})
    } 

    submit = () => {
        var newName = {
            name: this.state.newTitle
        }
        this.props.save(this.props.id, newName);
        this.setState({editing:false})
    }

    render() {  
        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>                
                    <button> onClick={this.submit} </button>
                </div>
            )
        }
        
        else {
            editBoxOrEditButton = null
        }

        return (
            <div>
                <p> {this.props.name}</p>
                <button onClick={this.deletePosting}> Delete </button>
                <button onClick={this.editTitle}> Edit Title </button>
                <button onClick={this.submit}> submit </button>
                {editBoxOrEditButton}
            </div>
        )
    }
}

export default BrusselPosting;