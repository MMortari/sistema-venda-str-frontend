import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Form as Unform, Select } from '@rocketseat/unform'; 
import _ from 'lodash';

// Interface
import { ProdutosInterface } from './../../../interfaces/api';
// Service
import api from './../../../services/api';
// Components
import Head from './../../../components/Head';
// Style
import './style.scss';

const valores = [
  { id: "0", title: "0" },
  { id: "1", title: "1" },
  { id: "2", title: "2" },
  { id: "3", title: "3" },
  { id: "4", title: "4" },
  { id: "5", title: "5" },
  { id: "6", title: "6" },
  { id: "7", title: "7" },
  { id: "8", title: "8" },
  { id: "9", title: "9" },
  { id: "10", title: "10" },
  { id: "11", title: "11" },
  { id: "12", title: "12" },
  { id: "13", title: "13" },
  { id: "14", title: "14" },
  { id: "15", title: "15" },
  { id: "16", title: "16" },
  { id: "17", title: "17" },
  { id: "18", title: "18" },
]

class VendasNova extends Component {

  state = {
    produtos: [],
    totalProdutos: [{ id: null, total: 0 }]
  }

  async componentDidMount() {
    const response = await api.get(`/produtos`);
    const dados: ProdutosInterface[] = response.data;
    
    let totalProdutos: any[] = [];

    dados.map(data => totalProdutos.push({ id: data.id, total: 0 }))

    this.setState({ produtos: dados, totalProdutos });
  }

  handleFormSubmit = (data: any) => {
    console.log("Enviar formulário -> ", data)
  }

  handleTotalPorProduto = (id: number) => {
    let index = _.findIndex(this.state.produtos, ['id', id]);

    let produtos = this.state.produtos;
    // produtos[index].total = 2 * produtos[index].preco;
 
    this.setState({ produtos });

    console.log("Total por Produtos -> ", id);
    console.log("Produto -> ", produtos );
  }

  render() {
    return (
      <Fragment>
        <Head title="Nova Venda" breadcrumb={['Venda', 'Nova Venda']} />

        <Unform onSubmit={() => this.handleFormSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Vendedor</Form.Label>
                <Select className="form-control" name="produtos" options={this.state.produtos} placeholder="Selecione um vendedor" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Comanda</Form.Label>
                <Select className="form-control" name="produtos" options={this.state.produtos} placeholder="Selecione um vendedor" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <table className="table">
                <thead>
                  <tr>
                    <td>Produto</td> 
                    <td>Preço</td>
                    <td>Qtde</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.produtos.map((data: ProdutosInterface) => (
                      <tr key={data.id}>
                        <td>{data.nome}</td>
                        <td>{data.preco}</td>
                        <td><Select className="form-control selectSize" name="produtos" onChange={() => this.handleTotalPorProduto(data.id)} options={valores} /></td>
                        <td>Total</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Col>
            <Col md={12}>
              <Button className="w-100" variant="dark" type="submit"><i className="fa fa-plus-circle"></i></Button>
            </Col>
          </Row>
        </Unform>

      </Fragment>
    )
  }

}

export default VendasNova;