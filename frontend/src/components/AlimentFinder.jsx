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
            <form style={{height: "150px"}} onSubmit={this.handleSubmit}>
                <ul style={{listStyle: "none",paddingLeft: "0"}}>
                    <li>
                        <label>
                            Qu'avez vous mangé aujourd'hui ?
                            <br/><input type="text" value={this.state.aliment} onChange={this.handleChangeAliment} />
                        </label>
                    </li>
                    <li>
                        <input style={{borderRadius: "15px",backgroundColor: "#61dafb",color: "white",padding: "5px",paddingLeft: "20px",paddingRight: "20px"}} type="submit" value="Valider" />
                    </li>
                </ul>
            </form>
        );
    }
}
