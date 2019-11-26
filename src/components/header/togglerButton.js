import React from "react"
import styles from "./togglerButton.module.scss"

class TogglerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleTogglerClick = this.handleTogglerClick.bind(this);
  }

  handleTogglerClick(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
    this.props.onToggleClick();
  }

  render() {
    return (
      <>
        <div className={`${styles.menuToggler} ${this.state.isToggleOn ? styles.change : ''}`} onClick={this.handleTogglerClick}>
          <button className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${this.state.isToggleOn ? styles.isActive : ''}`} type="button">
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}></span>
            </span>
          </button>
        </div>
      </>
    )
  }
}

export default TogglerButton;
