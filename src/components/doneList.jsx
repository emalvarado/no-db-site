import React, { Component } from 'react'

class DoneListComp extends Component {
  constructor(props) {
    super(props);

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
        {/* <div id='buttons'>
          <button onClick={() => this.editButton()}>Edit</button>
          <button onClick={() => this.props.deleteItemFn(this.props.id)}>Delete</button>
        </div> */}
      </div>
    )
  }
}

export default DoneListComp;