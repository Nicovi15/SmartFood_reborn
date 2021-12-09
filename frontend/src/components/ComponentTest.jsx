import React from 'react';
import axios from 'axios';
import App from "../App";

export default class ComponentTest extends React.Component {

    constructor(props) {
    super(props);


  }


  componentDidMount() {
      var updateCal = this.props.updateCal;
    axios.post(`http://localhost:8000/infoAliment/`, {aliment : 'pomme'})
      .then(res => {
        const persons = res.data;
          updateCal(res.data['cal'])
      })
  }

  render() {
    return (
      <ul>
          <li>{this.props.cal}</li>
      </ul>
    )
  }
}
