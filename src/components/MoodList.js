import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/moodlist.scss'

function renderMoodinIcon(moodWithDate) {
    if (moodWithDate.mood === "good") {
        return <li key={moodWithDate.id} >
            <div className="mood__face good">
                <p className="mood__face_facial">:)</p>
            </div>
        </li>
    } else if (moodWithDate.mood === "bad") {
        return <li key={moodWithDate.id}>
            <div className="mood__face bad">
                <p className="mood__face_facial">:(</p>
            </div>
        </li>
    }
}

const MoodList = (props) => {
    return (<section className="mood">
        <nav className="mood__editor_link_wrapper">
            <Link to="/today" className="mood__editor_link"><div className="mood__editor_link_text">+</div></Link>
        </nav>
        <p>Are you happy?</p>
        <ul className="mood__list">
            {props.userData.map(date => renderMoodinIcon(date))}
        </ul>

    </section>)
}

export default MoodList;