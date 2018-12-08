import React, { Component } from 'react'
import Edit from '../Edit/Edit'

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            done: []
        }
    }

    editButton() {
        this.setState({
            editing: true
        })
    }

    hideEdit=() => {
        this.setState({
            editing: false
        })
    }

    handleDone = () => {
        this.props.deleteItemFn(this.props.id);
        this.state.done.push()
    }

    render() {

        return (
            <div>
                {this.state.editing ?
                    <Edit name={this.props.name}
                        photo={this.props.photo}
                        updateItemFn={this.props.updateItemFn}
                        id={this.props.id}
                        hideEdit={this.hideEdit} />
                    :
                    <div>
                        <div>
                            {this.props.name}
                        </div>
                        <img src={this.props.photo} height='200px' alt="" />
                    </div>

                }
                <button onClick={() => this.editButton()}>Edit</button>
                <button onClick={() => this.props.deleteItemFn(this.props.id)}>Delete</button>
                <button>Did it!!</button>
            </div>
        )
    }
}

export default ItemList