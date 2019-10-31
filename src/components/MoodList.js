import React from 'react';
import { Link } from 'react-router-dom';

function renderMoodinIcon(moodWithDate) {
    debugger;
    const date = Object.keys(moodWithDate).toString();
    if (moodWithDate[date] === "good") { return <li >:)</li> } else if (moodWithDate[date] === "bad") { return <li >:(</li> }

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