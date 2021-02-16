import PropTypes from 'prop-types';
import Button from './Button';


const Header = (props) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='pink' text='Add' onClick={onClick} />
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
