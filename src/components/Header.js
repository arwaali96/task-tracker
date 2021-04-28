import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = (props) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={props.showAdd ? 'goldenRod' : 'darkCyan'}
                    text={props.showAdd ? 'Close' : 'Add'}
                    onClick={props.onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Hi',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
