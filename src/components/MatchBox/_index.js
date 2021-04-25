import React, {Component} from 'react'
import MoreBetButton from '../MoreBetButton'
import PercentageBar from '../PercentageBar'
import './MatchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMoneyBillWave, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Sheild from '../Sheild'

// let offset = new Date().getTimezoneOffset() / 60;

library.add( faCalendarAlt, faClock, faMoneyBillWave, faInfoCircle )

class MatchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:props.data,
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
        <div className="mb-time">
          <div className="mb-time-holder">
            <FontAwesomeIcon className="mb-time-holder-icon-l" icon={['far', 'calendar-alt']} />
            <div>{date.split(' ')[0].split('/')[1]}/{date.split(' ')[0].split('/')[2]}</div>
          </div>
          <div className="mb-time-holder">
            <div>{date.split(' ')[1].slice(0, -3)}</div>
            <FontAwesomeIcon className="mb-time-holder-icon-r" icon={['far', 'clock']} />
          </div>
        </div>
        <div className="mb-inner">
          <div className="team-holder t1">
            <Sheild
              name={data.Outcome[0].Name}
              className="avatar"
            />
            <h3>{data.Outcome[0].Name}</h3>
          </div>
          <p className="vs-txt-box">VS</p>
          <div className="team-holder t2">
            <Sheild
              name={data.Outcome[1].Name}
              className="avatar"
            />
            <h3>{data.Outcome[1].Name}</h3>
          </div>
        </div>
        <PercentageBar
          t1odds={data.Outcome[0]._price_dec}
          t2odds={data.Outcome[1]._price_dec}
        />
        <MoreBetButton
          quicklink={this.state.data.Quicklink}
        />
      </div>
    )
  }
}

export default MatchBox;
