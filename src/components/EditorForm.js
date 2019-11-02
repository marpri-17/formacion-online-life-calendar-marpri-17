import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/EditorForm.scss';

class EditorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            mood: "",
            message: "",
            showMessage: false,
        }
        this.buttonSubmit = React.createRef();
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleShowMessage = this.handleShowMessage.bind(this);
        this.handleUserMessageInput = this.handleUserMessageInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleShowMessage(ev) {
        const button = this.buttonSubmit.current;
        button.disabled = false;
        const mood = ev.target.value;
        if (mood === "good") {
            this.setState({
                mood: "good",
                showMessage: true
            })
        } else if (mood === "bad") {
            button.focus();
            this.setState({
                mood: "bad",
                showMessage: false
            })
        }
    }

    handleUserMessageInput(ev) {
        this.setState({
            message: ev.target.value
        }, () => console.log(this.state))
    }

    handleSubmit(ev) {
        debugger
        const { handleSaveData } = this.props;
        ev.preventDefault();
        const { date, mood, message } = this.state;
        const newDay = { [date]: mood, "message": message }
        return handleSaveData(newDay)

    }

    render() {
        console.log(this.props)
        const { actualDate } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="editor__form">
                <p>Add new mood for Today</p>
                <p>{actualDate}</p>
                <label htmlFor="selected_date">Fecha</label>
                <input type="date" className="editor__form_inputdate" defaultValue={actualDate} name="selected_date" onChange={this.handleChangeDate} />
                {(this.state.date !== "") ? <>
                    <label htmlFor="mood" className="editor__form_moodtitle">Estado de ánimo
                        <label ><input type="radio" id="mood good" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="good" />:)</label>
                        <label><input type="radio" id="mood bad" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="bad" />:(</label>
                    </label>
                </> : ""}
                {(this.state.showMessage) ?
                    <label htmlFor="mood_message">Mensaje
                    <input type="text" name="mood_message" onChange={this.handleUserMessageInput} />
                    </label>
                    : ""
                }
                <button to="/" className="editor__form_buttonsubmit" onClick={this.handleSubmit} ref={this.buttonSubmit} disabled > guardar</button>
                <Link to="/">cancelar</Link>

            </form>
        )
    }
}


export default EditorForm;