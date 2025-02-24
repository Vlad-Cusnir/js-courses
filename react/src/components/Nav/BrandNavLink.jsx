import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Nav.module.css';

// export function BrandNavLink({to, children}) {
//   return (
//     <NavLink
//       className={({ isActive }) => clsx({ [styles.active]: isActive })}
//       to={to}
//     >
//       {children}
//     </NavLink>
//   );
// }

export function BrandNavLink({className, ...props}) {
  return (
    <NavLink
      className={({ isActive }) => clsx(className, { [styles.active]: isActive })}
      {...props}
    />
  );
}

// React.createElement(NavLink, {className, ...props})
