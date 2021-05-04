import classes from './Conditions.css'

function Conditions({responseObj}) {
    return(
        <div className={classes.Wrapper}>
            {responseObj.cod === 200 ?
                <div>
                    <p><strong>{responseObj.name}</strong></p>
                    <p>It is currently {Math.round(responseObj.main.temp)} degrees out with {responseObj.weather[0].description}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default Conditions