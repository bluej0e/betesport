import React, {Component} from 'react'
import './MoreBetButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MoreBetButton extends Component {
  render() {
    return (
      <div className="mb-button-holder" >
        <a href={this.props.quicklink } className="more-info-button">
          <FontAwesomeIcon className="mb-time-holder-icon-l" icon="info-circle" />
          more info
        </a>
        <a href={ this.props.quicklink } target="_blank" rel="noopener noreferrer" className="bet-button">
          Bet Now
          <FontAwesomeIcon className="mb-time-holder-icon-r" icon="money-bill-wave" />
        </a>
      </div>
    );
  }
}

export default MoreBetButton;
