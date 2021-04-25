import React, {Component} from 'react'
import '../App.css'

class BetButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      props
    }
  }

  render() {
    let afflink = this.props.data.externalUrl
    return (
      <a href={afflink} target="_blank" rel="noopener noreferrer" className="bet-button">Bet Now</a>
    );
  }
}

export default BetButton;
