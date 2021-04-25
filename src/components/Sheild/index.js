import React, {Component, Suspense} from 'react'
import {Img} from 'react-image'
import fallback from '../../images/logos/default_sheild.png'

import './Sheild.css'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../images/logos', false, /\.(png|jpe?g|svg)$/));


class Sheild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.name,
      color: '',
    }
  }

  state = {
    image: fallback
  };

  compomnentDidMount() {
    this.setState({
      image: this.props.image
    });
  }

  loadFallback() {
    this.setState({
      image: fallback
    });
  }

  render() {
    let src = (`${this.state.image.replace(/\s+/g, '-').toLowerCase()}.png`);
    let iz = images[src];

    return (
      <Suspense>
        <Img
          src={iz}
          unloader={<img src={fallback} alt={this.props.name}/>}
          alt={this.props.name}
          loading="lazy"
          className="sheild-backdrop"
        />
      </Suspense>
    );
  }
}
export default Sheild;
