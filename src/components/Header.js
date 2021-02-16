import PropTypes from 'prop-types';
import Button from './Button';


const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button
                color={props.showAdd ? 'GoldenRod' : 'DarkCyan' }
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd} />
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

// CSS in JSON, eg  <h1 style={headingStyle}>...</hi>
// const headingStyle = {
//     color: 'pink', backgroundColor: 'grey',
// }

export default Header
