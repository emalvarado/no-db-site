import React, { Component } from 'react'
import './edit.css'


class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputEditName: '',
            inputEditPhoto: '',
        }
    }

    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    updateItem = () => {
        const { inputEditName, inputEditPhoto } = this.state;
        const { id, updateItemFn, hideEdit } = this.props;

        updateItemFn(id, inputEditName, inputEditPhoto);
        hideEdit()
    }

    handleKeyDown(e) {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            this.updateItem(this.props.id, this.state.inputEditName, this.state.inputEditPhoto);
        }
    }

    render() {
        return (
            <div>
                <div className='listItems'>
                    <img src={this.props.photo} width='350px' alt="" />
                    <div className='name'>
                        {this.props.name}
                    </div>
                </div>
                <div id="updateInput">
                    <input
                        onChange={(e) => this.handleChange('inputEditName', e.target.value)}
                        placeholder="Update Idea"
                        type="text" 
                        onKeyDown={(e) => this.handleKeyDown(e)}
                        />
                    <input
                        onChange={(e) => this.handleChange('inputEditPhoto', e.target.value)}
                        placeholder="Update Picture"
                        type="text"
                        onKeyDown={(e) => this.handleKeyDown(e)} />
                    <button className='editbuttons' onClick={() => this.updateItem(this.props.id, this.state.inputEditName, this.state.inputEditPhoto)}>Update</button>
                    <button className='editbuttons' onClick={() => this.props.hideEdit()}>Cancel</button>
                </div>
            </div>

        )
    }
}

export default Edit