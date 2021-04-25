import React, { useEffect } from 'react';
import axios from 'axios';
import betwayXml from './betway_soccer.xml';
import API from './apis';

const convert = require("xml-js");


class Api extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        feed: []
      }
  }

  componentDidMount() {
    axios.get(betwayXml).then((res) => {
       const data = JSON.parse(
         convert.xml2json(res.data, { })
      );
      this.setState({ feed: data.elements[0].elements });
    });
  }

render() {
   // console.log("Api loaded: ", this.state.feed);

  return (
    <div>
    </div>
  )};
}

export default Api
