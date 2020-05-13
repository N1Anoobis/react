import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    img: PropTypes.node.isRequired,
    column: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    // column: "animal",
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} img={this.props.img}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
        <Column column={"animal"} />
        <Column column={"plants"} />
        <Column column={"minerals"} />
        </div>
      </section>
    )
  }
}

export default List;
