import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const items = window.homepageSliderItems;

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: items
    })
  }

  styleActiveItem(activeStatus) {
    if (activeStatus === true) {
      return 'item active'
    } else {
      return 'item'
    }
  }

  onHover(id) {
    let tempItems = [...this.state.items];
    tempItems[id].active = true;
    this.setState({tempItems});
  }

  onExit(id) {
    let tempItems = [...this.state.items];
    tempItems[id].active = false;
    this.setState({tempItems});
  }

  render() {
    return (
      <div className="slider-container">
        {this.state.items.map(item => {
          let itemStyle = {
            backgroundImage: `url(${item.imageUrl})`
          }
          return (
            <div 
              key={item.id}
              className={this.styleActiveItem(item.active)}
              onMouseOver={this.onHover.bind(this, item.id)}
              onMouseOut={this.onExit.bind(this, item.id)}
              style={itemStyle}>
              <div className="title-container">
                <h2>{item.label}</h2>
              </div>
              <div className="action-container">
                <a href={item.urlPath} className="slider-button">View Projects &raquo;</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

render(<App />, document.getElementById('homepage-slider'));