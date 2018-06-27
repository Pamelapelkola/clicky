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
    tiles
  };

  moveTiles = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const tiles = this.state.tiles.filter(tile => tile.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ tiles });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Header />
        <Navbar />
        <ScoreKeeper />
        
        {this.state.tiles.map(tile => (
          <TileCard
            moveTiles={this.moveTiles}
            id={tile.id}
            key={tile.id}
            image={tile.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


