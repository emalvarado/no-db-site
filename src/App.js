import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ItemList from './components/bucketListItems/bucketListItems'
import Nav from './components/navbar/navbar'
// import DoneList from './components/DoneList/DoneList'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPhoto: '',
      inputName: '',
      bucketList: [],
    }
  }

  componentDidMount = () => {
    axios.get('api/bucket')
      .then(res => {
        // console.log(res.data)
        this.setState({
          bucketList: res.data
        })
      })
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  handleClick = () => {
    axios.post('/api/bucket', { name: this.state.inputName, photo: this.state.inputPhoto }).then(res => {
      // console.log(res)
      this.setState({
        bucketList: res.data,
        inputPhoto: '',
        inputName: ''
      })
    })
  }

  deleteItem = (idToDelete) => {
    axios.delete(`/api/bucket/${idToDelete}`)
      .then(res =>
        this.setState({
          bucketList: res.data
        }))
  }

  updateItem = (idToUpdate, name, photo) => {
    axios.put(`/api/bucket/${idToUpdate}`, { name: name, photo: photo })
      .then(res => {
        // console.log(res.data)
        this.setState({
          bucketList: res.data,
          editing: false
        })
      })
  }







  render() {
    const { bucketList } = this.state;
    return (
      <div>
      <Nav />
        <input onChange={e => { this.handleChange('inputName', e.target.value) }}
          type="text"
          placeholder='Your idea here'
          value={this.state.inputName} />
        <input onChange={e => { this.handleChange('inputPhoto', e.target.value) }}
          type="text"
          value={this.state.inputPhoto}
          placeholder='Photo URL' />
        <button onClick={() => this.handleClick()}>Add to your Bucket List</button>
        {bucketList.map(item => (
          <ItemList key={item.id}
            name={item.name}
            photo={item.photo}
            id={item.id}
            updateItemFn={this.updateItem}
            deleteItemFn={this.deleteItem} />
        ))}
        <header>Look at all the cool things you've done!!</header>
         
      </div>
    );
  }
}

export default App;
