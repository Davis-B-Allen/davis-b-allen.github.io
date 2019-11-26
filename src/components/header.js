import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import TogglerButton from "./header/togglerButton"
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = {isToggleOn: false};
  }

  handleToggleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render () {
    return (
      <header className={headerStyles.header}>
        <TogglerButton onToggleClick={this.handleToggleClick} />
        <div className={headerStyles.davisallenLogo}>
          <span className={headerStyles.path}>{this.props.headerPath}</span><Link to="/" className={headerStyles.logoLink}>davis allen</Link><span className={headerStyles.dollarSign}>$</span>
        </div>
        <div className={headerStyles.terminal}>
        </div>
        <div className={headerStyles.mainNavContainer}>
          <ul className={`${headerStyles.mainNav} ${this.state.isToggleOn ? headerStyles.active : ''}`}>
            <li>
              <Link to="/" className={`${headerStyles.navLink} ${headerStyles.homeLink}`}>home</Link>
            </li>
            <li>
              <Link to="/about" className={headerStyles.navLink}>about</Link>
            </li>
            <li>
              <Link to="/work" className={headerStyles.navLink}>work</Link>
            </li>
            <li>
              <Link to="/contact" className={headerStyles.navLink}>contact</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
// const Header = (props) => {
//
//   function handleTogglerClick(e) {
//     console.log(e.target);
//     console.log(e.target.classList);
//     e.target.classList.toggle(headerStyles.change);
//     console.log(e.target.classList);
//   }
//
//   return (
//     <header className={headerStyles.header}>
//       <div className={headerStyles.menuToggler} onClick={handleTogglerClick}>
//         <div className={headerStyles.bar1}></div>
//         <div className={headerStyles.bar2}></div>
//         <div className={headerStyles.bar3}></div>
//       </div>
//       <div className={headerStyles.davisallenLogo}>
//         <span className={headerStyles.path}>{props.headerPath}</span><Link to="/" className={headerStyles.logoLink}>davis allen</Link><span className={headerStyles.dollarSign}>$</span>
//       </div>
//       <div className={headerStyles.terminal}>
//       </div>
//       <div className={headerStyles.mainNavContainer}>
//         <ul className={headerStyles.mainNav}>
//           <li>
//             <Link to="/about" className={headerStyles.navLink}>about</Link>
//           </li>
//           <li>
//             <Link to="/work" className={headerStyles.navLink}>work</Link>
//           </li>
//           <li>
//             <Link to="/contact" className={headerStyles.navLink}>contact</Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   )
// }

export default Header;
