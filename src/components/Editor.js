import React from 'react';

function pickRadioMoodData() {

}

const Editor = ({ date, }) => {
    return (
        <>
            <label htmlFor="mood" className="editor__form_moodtitle">Estado de ánimo
                                <label ><input type="radio" id="mood good" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="good" />:)</label>
                <label><input type="radio" id="mood bad" className="mood__radio" name="mood" onChange={this.handleShowMessage} value="bad" />:(</label>
            </label>
            {(this.state.showMessage) ?
                <label htmlFor="mood_message">Mensaje
                                <input type="text" name="mood_message" onChange={this.handleUserMessageInput} />
                </label>
                : ""}
            <button to="/" className="editor__form_buttonsubmit" onClick={this.handleSubmit} ref={this.buttonSubmit} disabled > guardar</button>
        </>
    )
}

export default Editor;