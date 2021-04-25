import React, {Component} from 'react'
import './PercentageBar.css'

class PercentageBar extends Component {
  render() {
    let t1perc = Math.round(((1/this.props.t1odds)*100)-4) + '%';
    let t2perc = Math.round(((1/this.props.t2odds)*100)-4) + '%';
    return (
      <div className="mb-percentage-bar" >
        <div className="pb-text t1">{this.props.t1odds}<br/>{t1perc}</div>
        <div className="gamebar" style={{backgroundColor: this.props.t1col}}>
          <div className="gamebar-full" style={{width:t1perc, backgroundColor:this.props.t2col}}></div>
        </div>
        <div className="pb-text t2">{this.props.t2odds}<br/>{t2perc}</div>
      </div>
    );
  }
}

export default PercentageBar;
