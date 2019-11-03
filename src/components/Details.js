import React from 'react';

function renderDetails(dayToRender) {
    let defaultMessage = dayToRender.message || " !! Olvidaste apuntarlo"
    if (dayToRender.mood === "good") {
        return <>
            <div>
                <div className="mood__face good">
                    <p className="mood__face_facial">:)</p>
                </div>
                <p>{dayToRender.mood}</p>
            </div>
            <div>
                <h6> Gran acontecimiento:</h6>
                <input type="textarea" value={defaultMessage} readOnly ></input>
            </div>
        </>
    } else if (dayToRender.mood === "bad") {
        return <div>
            <div className="mood__face bad">
                <p className="mood__face_facial">:(</p>
            </div>
            <p>{dayToRender.mood}</p>
        </div>
    }

}

const Details = (props) => {
    const { dayToRender } = props;
    return (
        <>
            <h4>{props.children}</h4>
            <p>{dayToRender.id}</p>
            {renderDetails(dayToRender)}

        </>
    )
}

export default Details;