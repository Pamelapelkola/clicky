import React,{ Component } from 'react';
// import logo from './logo.svg';
import Header from "./components/Jumbotron/Header";
import Navbar from "./components/Nav/Navbar";
import ScoreKeeper from './components/ScoreKeeper/ScoreKeeper';
import TileCard from "./components/TileCard/TileCard";
import tiles from "../Tiles.json";
import Wrapper from "../Wrapper"
// import ScoreKeeper from "./components/ScoreKeeper";
import "./styles/App.css";

class App extends Component {
  state = {
    tiles
  };

  removeTiles = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const tiles = this.state.tiles.filter(tile => tile.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ tiles });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      
        {this.state.tiles.map(tile => (
          <TileCard
            removeTiles={this.removeTiles}
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

  // const App = () => (

  // Setting this.state.friends to the friends json array
  // <div>
  //   <Header />
  //   <Navbar />
  //   <ScoreKeeper />
  //   <TileCard />
  // </div>

