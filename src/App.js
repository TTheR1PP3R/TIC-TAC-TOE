import React from 'react';
import logo from './logo.svg';
import './App.css';




class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9). fill(null),
    }
  }
  renderSquare(i) {
    return <Square
     value={this.state.squares[i]}
     onCLick={this.handleClick(i)}
     />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onCLick({value: 'X'})}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Game;

