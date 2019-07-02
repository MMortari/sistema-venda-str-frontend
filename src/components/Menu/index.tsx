import React from 'react';
import { Link } from 'react-router-dom';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free';

import './style.scss';

const Menu = () => (
  <aside>
    <ul>
      {/* <li><Link to="">Link <FontAwesomeIcon icon="coffee" /></Link></li> */}
      <li><span>Geral</span></li>
      <li><Link to="/">Dashboard <i>></i></Link></li>
      <li><Link to="/link">Link <i>></i></Link></li>
      <li><Link to="/link">Link <i>></i></Link></li>
      <li><Link to="/link">Link <i>></i></Link></li>
      <li><Link to="/link">Link <i>></i></Link></li>
    </ul>
  </aside>
)

export default Menu;