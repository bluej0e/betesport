import React, {Component} from 'react'
import MoreBetButton from '../MoreBetButton'
import PercentageBar from '../PercentageBar'
import './MatchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMoneyBillWave, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Sheild from '../Sheild'
import vsImg from '../../images/vs.png'

library.add( faCalendarAlt, faClock, faMoneyBillWave, faInfoCircle )

class MatchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:props.data
    }
  }

  render() {
    function arrayCheck(data) {
      if (!Array.isArray(data)) {
        return data;
      } else {
        return data[0];
      }
    }

    let data = arrayCheck(this.state.data.Market)
    let date = new Date(this.state.data._start_at).toString();

    return (
      <div className="MatchBox">

        <div className="sheild-holder" style={{gridArea: 'sheild1'}}>
          <Sheild
            name={data.Outcome[0].Name}
            className="avatar"
          />
          </div>

        <h3 style={{gridArea: 'name1', justifySelf:'left'}}>{data.Outcome[0].Name}</h3>
        <h4 style={{gridArea: 'odds1', justifySelf:'right'}}>{data.Outcome[0]._price_dec}</h4>

        <div className="sheild-holder" style={{gridArea: 'sheild2'}}>
          <Sheild
            name={data.Outcome[1].Name}
            className="avatar"
          />
        </div>

        <h3 style={{gridArea: 'name2', justifySelf:'left'}}>{data.Outcome[1].Name}</h3>
        <h4 style={{gridArea: 'odds2', justifySelf:'right'}}>{data.Outcome[1]._price_dec}</h4>

      </div>
    )
  }
}

export default MatchBox;
