import React, {Component} from 'react'
import GameTypeBar from '../GameTypeBar'
import './Landing.css'

// import API from '../../Api';

import Betwayfeed from '../../betway-feed.json'


let betwayFeed = Betwayfeed.EventList.Event;
// let betwayFeed = API.EventList.Event;

let allGamesArray = [];
let lol=[],
    dota=[],
    csgo=[],
    other=[],
    rocket=[],
    overwatch=[];


function matchSorter(item){
  for (var i = 0; i < item.Keywords.Keyword.length; i++) {
    if (item.Keywords.Keyword[i]._type_cname === "country"  ) {
      if (item.Keywords.Keyword[i]._cname === "league-of-legends")  {
        lol.push(item)
        continue;
      } else if (item.Keywords.Keyword[i]._cname === "dota-2") {
        dota.push(item)
        continue;
      } else if (item.Keywords.Keyword[i]._cname === "cs-go") {
        csgo.push(item)
        continue;
      } else if (item.Keywords.Keyword[i]._cname === "overwatch") {
        overwatch.push(item)
        continue;
      } else if (item.Keywords.Keyword[i]._cname === "rocket-league") {
        rocket.push(item)
        continue;
      } else {
        other.push(item)
        continue;
      }
    }
  }
};

function arrayCleanse(arr, value) {
   return arr.filter(function(ele){
       return ele != value;
   });
};

(function(){
  for (var i = 0; i < betwayFeed.length; i++) {
    if ( Array.isArray(betwayFeed[i].Market) ){
      for (var n = 0; n < betwayFeed[i].Market.length; n++) {
        if ((betwayFeed[i].Market[n]._cname === "match-winner") && (betwayFeed[i].Market[n]._type_cname === "to-win")) {
          matchSorter(betwayFeed[i])
        }
      }
    } else if ((betwayFeed[i].Market._cname === "match-winner")  && (betwayFeed[i].Market._type_cname === "to-win") ) {
      matchSorter(betwayFeed[i])
    }
  }
})();

allGamesArray.push(lol, dota, csgo, other, rocket, overwatch);

let allGames = arrayCleanse(allGamesArray, 0);

class Landing extends Component {
  constructor(props){
    super(props);
    this.state={
      props
    }
  }

  componentWillMount(){
    this.setState({
      allGames
    })
  }

  render(){
    console.log("im really trying...", this.state);

    return(
      <div className="landing-main">
        <h1>Welcome to Bet Esport.com</h1>
        <div className="main-holder">
          {
            this.state.allGames.map( (i,k) => <GameTypeBar key={k} matches={i} />)
          }
        </div>
      </div>
    )
  }
}

export default Landing;
