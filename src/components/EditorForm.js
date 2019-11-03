import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/EditorForm.scss';
import Editor from './Editor';

class EditorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            mood: "",
            message: "",
            showMessage: false,
            isDateSaved: false,
        }
        this.buttonSubmit = React.createRef();
        this.buttonReturn = React.createRef();
        this.form = React.createRef();
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleShowMessage = this.handleShowMessage.bind(this);
        this.handleUserMessageInput = this.handleUserMessageInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderSavedData = this.renderSavedData.bind(this);
    }
    renderSavedData() {
        const { userData } = this.props;
        console.log(userData)
        return (<p>Detalles guardados</p>)
    }


    handleChangeDate(ev) {
        const { userData } = this.props;
        const dateSelected = ev.target.value;
        const datesSavedByUser = userData.map(date => date.id)
        console.log(datesSavedByUser)
        if (datesSavedByUser.includes(dateSelected)) {
            console.log("está guardada")
            this.setState({
                isDateSaved: true,
            })
        } else {
            console.log("nueva")
            this.setState({
                date: dateSelected,
                isDateSaved: false,
            })
        };
    }

    handleShowMessage(ev) {
        const mainButton = this.buttonSubmit.current;
        mainButton.disabled = false;
        const mood = ev.target.value;
        if (mood === "good") {
            this.setState({
                mood: "good",
                showMessage: true
            })
        } else if (mood === "bad") {
            mainButton.focus();
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
        const newDay = { id: date, mood: mood, message: message }
        const buttonReturn = this.buttonReturn.current;
        buttonReturn.innerHTML = "volver"
        this.setState({
            showMessage: false,
            isDateSaved: true,
        })
        // const form = this.form.current;
        // form.reset();
        return handleSaveData(newDay)

    }

    render() {
        console.log(this.props)
        const { actualDate } = this.props;
        return (
            <form className="editor__form" ref={this.form} onSubmit={this.handleSubmit}>
                <p>Add new mood for Today</p>
                <p>{actualDate}</p>
                <label htmlFor="selected_date">Fecha</label>
                <input type="date" className="editor__form_inputdate" name="selected_date" onChange={this.handleChangeDate} />
                {
                    (this.state.isDateSaved === true) ? this.renderSavedData() :
                        (this.state.date !== "") ? <>
                            <label htmlFor="mood" className="editor__form_moodtitle">Estado de ánimo
                                <label ><input type="radio" id="mood good" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="good" />:)</label>
                                <label><input type="radio" id="mood bad" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="bad" />:(</label>
                            </label>
                            {(this.state.showMessage) ?
                                <label htmlFor="mood_message">Mensaje
                                <input type="text" name="mood_message" onChange={this.handleUserMessageInput} />
                                </label>
                                : ""}
                            <button to="/" className="editor__form_buttonsubmit" ref={this.buttonSubmit} disabled > guardar</button>
                        </> : ""}


                <Link to="/" ref={this.buttonReturn} className="editor__form__returnbutton">cancelar</Link>

            </form>
        )
    }
}


export default EditorForm;

