import React from 'react'

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.speed}</li>
          <li>{this.props.hasRockets}</li>
        </ul>
        <p>Colors: {this.props.colors.join(' ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
