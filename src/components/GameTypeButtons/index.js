import React, {Component} from 'react'
import './GameTypeButtons.css'
import MatchBox from '../MatchBox'

var images = require.context('../../images', true);

const masterGameTypes = ['league-of-legends', 'dota-2', 'cs-go', 'overwatch', 'call-of-duty', 'rocket-league'];

class GameTypeButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches : props.matches
    }
  }


  render() {
      let gameType = this.state.matches[0].Quicklink.replace("http://sports.betway.com/esports/", "").split("/")[0];
      function bannerType() {
        if (masterGameTypes.includes(gameType) ) {
          return gameType;
        } else{
          return 'other'
        }
      }

      let gameTypeBanner = images(`./gameTypes/${bannerType()}-header.jpg`);

      const gameTypes = this.state.matches.map((item, key) =>
          <MatchBox data={item} key={key} />
        ) ;

      return (
        <div className="game-type-holder">
          <div className="game-type-banner" style={{backgroundImage:`url(${gameTypeBanner})` }}>
            <h3>{gameType.replace(/-/g, ' ').toUpperCase()}</h3>
          </div>
          <div className="match-holder">
            {gameTypes}
          </div>
        </div>
      )
    }
}

export default GameTypeButtons;
