import React, { Component } from 'react'

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
       const {inputEditName, inputEditPhoto} = this.state;
       const {id, updateItemFn, hideEdit} = this.props;

       updateItemFn(id, inputEditName, inputEditPhoto);
       hideEdit()
      }

    render() {
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
                <img src={this.props.photo} height='200px' alt="" />

                <input
                    onChange={(e) => this.handleChange('inputEditName', e.target.value)}
                    placeholder="Update Idea"
                    type="text" />
                <input
                    onChange={(e) => this.handleChange('inputEditPhoto', e.target.value)}
                    placeholder="Update Picture"
                    type="text" />
                <button onClick={() => this.updateItem(this.props.id, this.state.inputEditName, this.state.inputEditPhoto)}>Update</button>
                <button onClick={() => this.props.hideEdit()}>Cancel</button>

            </div>

        )
    }
}

export default Edit