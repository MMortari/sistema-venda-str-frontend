import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

//Interface
import { ProdutosInterface } from './../../../interfaces/api';
// Service
import api from './../../../services/api';
// Component
import Head from './../../../components/Head';
import DinheiroMask from './../../../components/DinheiroMask'
//Style
import './style.scss';

class Produtos extends Component {

  state = {
    loading: false,
    produtos: [],
    showModalNewProduct: false,
  }

  async componentDidMount() {
    const response = await api.get(`/produtos`);
    const produtos: Array<ProdutosInterface> = response.data;
    this.setState({ produtos });
  }

  handleEditaProduto = (produto: ProdutosInterface) => console.log("Editar Produto -> ", produto)

  handleDeleteProduto = (id: number) => console.log("Apagar Produto -> ", id)

  handleOpenModalNewProduct = () => this.setState({ showModalNewProduct: true });
  handleCloseModalNewProduct = () => this.setState({ showModalNewProduct: false });

  render() {
    return (
      <Fragment>
        <Head title="Produtos" breadcrumb={['Produtos']} >
          <button className="btn btn-dark" onClick={this.handleOpenModalNewProduct}>add new product</button>
        </Head>

        { this.state.loading && (<i className="fa fa-spinner fa-spin"></i>) }

        <table className="table table-borded">
          <thead>
            <tr>
              <th className="w-10">id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th className="w-5 text-center">Editar</th>
              <th className="w-5 text-center">Apagar</th>
            </tr>
          </thead>
          <tbody>
            { this.state.produtos.map((produto: ProdutosInterface, index) => (
              <tr key={index}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td><DinheiroMask>{produto.preco}</DinheiroMask></td>
                <td><button className="btn btn-info" onClick={() => this.handleEditaProduto(produto)}><i className="fa fa-info-circle"></i></button></td>
                <td><button className="btn btn-danger" onClick={() => this.handleDeleteProduto(produto.id)}><i className="fa fa-trash"></i></button></td>
              </tr>
            )) }
          </tbody>
        </table>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          show={this.state.showModalNewProduct}
          onHide={() => this.setState({ showModalNewProduct: false })}
          centered
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ showModalNewProduct: false })}>Close</Button>
            <Button variant="primary" onClick={() => this.setState({ showModalNewProduct: false })}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }

}

export default Produtos;