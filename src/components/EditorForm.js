import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/EditorForm.scss';

class EditorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            message: false,
        }

        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeDate(ev) {
        const { userData } = this.props;
        const dateSelected = ev.target.value;
        const datesSavedByUser = userData.map(date => {
            const dateKeys = Object.keys(date);
            const dateKey = dateKeys[0].toString();
            return dateKey;
        })
        if (datesSavedByUser.includes(dateSelected)) {
            console.log("Ya existe esta fecha")
        } else {
            this.setState({
                date: dateSelected,
            })
        };
    }

    render() {

        const { actualDate, handleSaveData } = this.props;
        return (
            <form>
                <p>Add new mood for Today</p>
                <p>{actualDate}</p>
                <label htmlFor="selected_date">Fecha</label>
                <input type="date" defaultValue={actualDate} name="selected_date" id="selected_date" onChange={this.handleChangeDate} />
                {(this.state.date !== "") ?
                    <label htmlFor="mood">Estado de ánimo
                <label ><input type="checkbox" id="mood good" className="mood__checkbox" name="mood" />:)</label>
                        <label><input type="checkbox" id="mood bad" className="mood__checkbox" name="mood" />:(</label>
                    </label> : ""}
                {(this.state.message) ?
                    <>
                        <label htmlFor="mood_message">Mensaje
                    <input type="text" name="mood_message" />
                        </label>
                        <button type="submit" onClick={handleSaveData}>guardar</button></> : ""
                }
                <Link to="/">cancelar</Link>

            </form>
        )
    }
}


export default EditorForm;