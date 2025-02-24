import { Link } from "react-router-dom";
import { BrandNavLink } from "./BrandNavLink";

import logo from "./logo.png"
import styles from './Nav.module.css';


export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <menu className={styles.mainMenu}>
        <li><BrandNavLink to="/">Home</BrandNavLink></li>
        <li><BrandNavLink to="counter">Counter</BrandNavLink></li>
        <li><BrandNavLink to="weather">Weather</BrandNavLink></li>
        <li><BrandNavLink to="todos">Todos</BrandNavLink></li>
        <li><BrandNavLink to="register">Register</BrandNavLink></li>
        <li><BrandNavLink to="login">Login</BrandNavLink></li>
      </menu>
    </nav>
  )
}
