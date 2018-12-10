import React, { Component } from 'react'
import Edit from '../Edit/Edit'
import './bucketListItems.css'

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            // done: []
        }
    }

    editButton() {
        this.setState({
            editing: true
        })
    }

    hideEdit = () => {
        this.setState({
            editing: false
        })
    }

    // handleDone = () => {
    //     this.props.deleteItemFn(this.props.id);
    //     this.state.done.push()
    // }



    render() {

        return (
            <div id='listItemsMain'>
                {this.state.editing ?
                    <Edit name={this.props.name}
                        photo={this.props.photo}
                        updateItemFn={this.props.updateItemFn}
                        id={this.props.id}
                        hideEdit={this.hideEdit} />
                    :
                    <div className='listItems'>
                        <img src={this.props.photo} width='350px' alt="" />
                        <div className='name'>
                            {this.props.name}
                        </div>
                    </div>

                }
                <div id='buttons'>
                    <button onClick={() => this.editButton()}>Edit</button>
                    <button onClick={() => this.props.deleteItemFn(this.props.id)}>Delete</button>
                    {/* <button>Did it!!</button> */}
                </div>
            </div>
        )
    }
}

export default ItemList