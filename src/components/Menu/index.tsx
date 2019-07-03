import React from 'react';
import { Link } from 'react-router-dom';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free';

import './style.scss';

const Menu = () => (
  <aside>
    <ul>
      {/* <li><Link to="">Link <FontAwesomeIcon icon="coffee" /></Link></li> */}
      <li><button className="addNew btn btn-dark">Nova Venda</button></li>
      <li><span>Geral</span></li>
      <li><Link to="/">Dashboard <i className="fa fa-chevron-right"></i></Link></li>
      <li><Link to="/link">Vendas <i className="fa fa-chevron-right"></i></Link></li>
      <li><Link to="/link">Relatórios <i className="fa fa-chevron-right"></i></Link></li>
    </ul>
  </aside>
)

export default Menu;