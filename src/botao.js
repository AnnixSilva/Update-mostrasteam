import React from 'react';
import "./botao.css";

class MeuBotao extends React.Component {
  handleClick = () => {
    alert('Você clicou no botão!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Login
      </button>
    );
  }
}

export default MeuBotao;
