import { useState } from "react"
import React, { Component } from "react";
import axios from "axios";


class AlimentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: "",
    };
  }

  handleTickerChange = (event) => {
    this.setState({
      ticker: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost8000/infoAliment/", this.state)
      .then((response) => {
        console.log(response.data);
        const {contract} = response.data
        this.setState({ contract: contract });
      })
      .catch((error) => {
        console.log(error);
      });
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Ticker </label>
          <input
            type="text"
            name="ticker"
            value={this.state.ticker}
            onChange={this.handleTickerChange}
          />
          <button type="submit">Submit</button>
        </div>
        {this.state.contract}
      </form>
    );
  }
}

export default AlimentsForm;