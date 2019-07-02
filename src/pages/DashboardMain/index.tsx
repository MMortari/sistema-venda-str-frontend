import React, { Component } from 'react';

import './style.scss';

class DashboardMain extends Component {

  componentDidMount() {
    console.log("DashboardMain")
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>

        <div className="row">

          <div className="col-4">
            <div className="card">
              <div className="card-header">Vendas</div>
              <div className="card-body">
                <h5 className="card-title">Título de Card Primary</h5>
                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <div className="card-header">Lucro</div>
              <div className="card-body">
                <h5 className="card-title">Título de Card Primary</h5>
                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <div className="card-header">Comandas</div>
              <div className="card-body">
                <h5 className="card-title">Título de Card Primary</h5>
                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default DashboardMain;