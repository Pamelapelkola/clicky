import React,{ Component } from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import ScoreKeeper from './components/ScoreKeeper';
import TileCard from "./components/TileCard";
import Wrapper from "./components/Wrapper/Wrapper"
import tiles from "./Tiles.json"
import "./styles/App.css";

class App extends Component {
  state = {
    tiles,
    count:0
  };

  
  moveTiles = (a) => {
   const tiles = this.state.tiles.map(a => [Math.random(), a]) 
                 .sort((a, b)=> a[0] - b[0])
                 .map(a => a[1]);
          
  
this.setState({tiles})
};

  handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
    <Wrapper>
      <Header />
        <Navbar />
         <ScoreKeeper />
        
        {this.state.tiles.map(tile => (
          
          <TileCard
            moveTiles={this.moveTiles}
            handleIncrement={this.handleIncrement}
            id={tile.id}
            image={tile.image}
            key={tile.id}
          />    
        
        ))}
      </Wrapper>
        );
  }
}

export default App;