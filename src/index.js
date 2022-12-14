
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {

    constructor(props){
        super(props);
        this.state={
            value:null,
        };
    }



    render() {
      return (
        <button className="square" 
        
        onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );   
    }
  }
  
  class Board extends React.Component {

    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
        };
    }
  
    renderSquare(i) {
        return <Square value={this.state.squares[i]} />;
    }
  }
  
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
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  