import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
        calCharged: false,
        calDispo : 0,
        cal : 0
    };
  }


  componentDidMount() {
    axios.post(`http://localhost:8000/infoAliment/`, {aliment : 'pomme'})
      .then(res => {
        const persons = res.data;
        this.setState({ cal : res.data['cal'] });
        this.setState({ calCharged : true });
      })
  }

  render() {
    return (
      <ul>
          { (this.state.calCharged) &&
              <p>{this.state.cal}</p>
          //this.state.persons.map(person => <li>{person.cal}</li>)
          }
      </ul>
    )
  }
}