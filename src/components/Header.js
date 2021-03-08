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
            
            {/* <Button color= 'grey' text='Welcome' />
            <Button color= 'black' text='Exit' /> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Hi',
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JSON, eg  <h1 style={headingStyle}>...</h1>
// const headingStyle = {
//     color: 'pink', backgroundColor: 'grey',
// }

export default Header
