import React from 'react';
import { Link } from 'react-router-dom';

function renderMoodinIcon(moodWithDate) {
    debugger;
    const date = Object.keys(moodWithDate);
    const dateKey = date[0].toString(); // Asegurarse de que la fecha sea siempre la primera propiedad del objeto
    if (moodWithDate[dateKey] === "good") { return <li key={dateKey} >:)</li> } else if (moodWithDate[dateKey] === "bad") { return <li key={dateKey}>:(</li> }

}

const MoodList = (props) => {
    return (<section>
        <Link to="/today" className="mood__editor__link">+</Link>
        <p>Listado de caritas</p>
        <ul className="mood_list">
            {props.userData.map(date => renderMoodinIcon(date))}
        </ul>

    </section>)
}

export default MoodList;