import React from "react";
import axios from "axios";

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
            taille : 0,
            poids : 0,
            sexe : "homme"
        };

        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeTaille = this.handleChangeTaille.bind(this);
        this.handleChangeSexe = this.handleChangeSexe.bind(this);
        this.handleChangePoids = this.handleChangePoids.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAge(event) {
        this.setState({age: event.target.value});
    }

    handleChangeTaille(event) {
        this.setState({taille: event.target.value});
    }

    handleChangePoids(event) {
        this.setState({poids: event.target.value});
    }

    handleChangeSexe(event) {
        this.setState({sexe: event.target.value});
    }

    handleSubmit(event) {
        var updateCal = this.props.updateCal;
        axios.post(`http://localhost:8000/calDispo/`, {age : this.state.age, taille : this.state.taille, sexe : this.state.sexe, poids : this.state.poids})
            .then(res => {
                const persons = res.data;
                updateCal(res.data['cal'])
            })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Age :
                    <input type="text" value={this.state.age} onChange={this.handleChangeAge} />
                </label>
                <label>
                    Taille :
                    <input type="text" value={this.state.taille} onChange={this.handleChangeTaille} />
                </label>
                <label>
                    Poids :
                    <input type="text" value={this.state.poids} onChange={this.handleChangePoids} />
                </label>
                <label>
                  Sexe : 
                    <select type="select" value={this.state.sexe} label="Multiple Select" onChange={this.handleChangeSexe}>
                      <option value="homme">homme</option>
                      <option value="femme">femme</option>
                    </select>
                </label>
                
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}