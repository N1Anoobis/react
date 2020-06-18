import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search from '../Search/Search';
import Hamburger from '../Hamburger/HamburgerContainer.js';
import PropTypes from 'prop-types';
import { flag } from '../../data/dataStore';



class Header extends React.Component {

  static propTypes = {
    // icon: PropTypes.string,
    lists: PropTypes.array,
    sortColumn: PropTypes.func,
    hamburgerMenu: PropTypes.any,
  }

  // getData = (valFromHamburger) => {
  //   console.log(valFromHamburger);
  //   this.setState({
  //     value: valFromHamburger,
  //   });
  // }

  handleClick =()=>{
    flag.flag = true;
    console.log(flag.flag );

    // this.props.hamburgerMenu();
  };

  render() {
    const {icon} = settings;
    const {  lists, sortColumn } = this.props;
    return (
      <header className={styles.component}>

        <Hamburger onToggle={this.getData} lists={lists} action={sortColumn} >

        </ Hamburger>
        <Container>
         
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/' onClick={this.handleClick} >
              <Icon name={icon} />
            </Link>
            <Search/>
            <nav>
              <NavLink exact to='/' activeClassName='active' onClick={this.handleClick}>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>Faq</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }

}
export default Header;