import React from "react";
import axios from "axios";

export default class AlimentFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliment : ""
        };

        this.handleChangeAliment = this.handleChangeAliment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAliment(event) {
        this.setState({aliment: event.target.value});
    }


    handleSubmit(event) {
        var updateCal = this.props.updateCal;
        var actualCal = this.props.actualCal
        axios.post("http://localhost:8000/infoAliment/", {aliment : this.state.aliment})
            .then(res => {
                updateCal(Math.max(0,actualCal - res.data['cal']))
                console.log(actualCal - res.data['cal'])

            })
        this.setState({aliment : ""})
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Aliment :
                    <input type="text" value={this.state.aliment} onChange={this.handleChangeAliment} />
                </label>
                <input type="submit" value="Valider" />
            </form>
        );
    }
}
