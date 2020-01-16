import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: [
        {
          "id":0,
          "label":"Commercial",
          "imageUrl":"https://masielloarchitect.com/wp-content/uploads/MG_5737-Edit-1.jpg",
          "active":false
        },
        {
          "id":1,
          "label":"Educational / Institutional",
          "imageUrl":"https://masielloarchitect.com/wp-content/uploads/holy-cross-contemplative-center-hero-1.jpg",
          "active":false
        },
        {
          "id":2,
          "label":"Residential",
          "imageUrl":"https://masielloarchitect.com/wp-content/uploads/20190725_Stonewall-House.jpg",
          "active":true
        },
        {
          "id":3,
          "label":"Historical",
          "imageUrl":"https://masielloarchitect.com/wp-content/uploads/Render1.jpg",
          "active":false
        },
        {
          "id":4,
          "label":"Assistive",
          "imageUrl":"https://masielloarchitect.com/wp-content/uploads/DSC_0220.jpg",
          "active":false
        }
      ]
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
            </div>
          )
        })}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
