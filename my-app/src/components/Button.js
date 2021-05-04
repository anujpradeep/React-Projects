import propTypes from 'prop-types'

function Button({color,text, onClick}){
    
    return  (
        <button 
            onClick={onClick} 
            style= {{backgroundColor:color}} 
            className='btn'
        >
                {text} 
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
    text: 'Sub',
}

Button.propTypes = {
    color: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}
export default Button