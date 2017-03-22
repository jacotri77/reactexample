import React from 'react';
import './index.css';

const App=React.createClass({
  getInitialState: function(){
    return{
      count: 0,
      likes: 'likes',
      boogers: 'firstlikes'
    } 
  },
  getDefaultProps: function(){
    return {
      count: 0
    }
  },
  depressed: function(){
      this.setState({
        count: this.state.count + 1,
        likes: this.state.count === 0 ? 'like' : 'likes',
        liked: this.state.count === 68 ? 'YO YO MA': '',
        boogers: 'buttons'
      })
    setTimeout (function(){
    this.setState({
      boogers: 'firstlikes'
    })
    }.bind(this), 100)
  },
render: function(){
  return (
    <div >
      <button onClick={this.depressed} className={this.state.boogers}>{this.state.count} {this.state.likes} {this.state.liked}</button>
      
    </div>

    )
}

})

export default App;
