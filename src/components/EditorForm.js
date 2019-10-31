import React from 'react';

const EditorForm = (props) => {
    const { actualDate } = props;
    return (
        <div>
            <p>Add new mood for Today</p>
            <p>{actualDate}</p>
            <label htmlFor="selected_date">Fecha</label>
            <input type="date" defaultValue={actualDate} name="selected_date" />
            <label htmlFor="mood">Estado de ánimo</label>
            <label><input type="checkbox" id="mood good" className="mood__checkbox" name="mood" />:)</label>
            <label><input type="checkbox" id="mood bad" className="mood__checkbox" name="mood" />:(</label>
            <label htmlFor="mood_message">Mensaje</label>
            <input type="text" name="mood_message" />
            <button>guardar</button>
            <button>cancelar</button>
        </div>
    )
}


export default EditorForm;