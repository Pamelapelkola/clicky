import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ScoreKeeper from './components/ScoreKeeper';
import TileCard from "./components/TileCard";
import Wrapper from "./components/Wrapper/Wrapper"
import tiles from "./Tiles.json"
import "./styles/App.css";

class App extends Component {
  state = {
    tiles,
    count: 0,
    // clicks: [],
    // timeout
  };


  moveTiles = (a) => {
    const tiles = this.state.tiles.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);


    this.setState({ tiles })
  };

  //Need to create a Handle increment with on click and handle double click function
  // handleIncrement = (event) => {
  //   const clickHandler = event.preventDefault();
  //   clicks.push(new Date().getTime());
  //   window.clearTimeout(timeout);
  //   timeout = window.setTimeout(() => {
  //       if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
  //           doubleClick(event.target);
  //       } else {
  //           singleClick(event.target);
  //       }
  //   }, 250);

  //   this.setState({ count: this.state.count + 1 })
  //   this.setState({ count })
  // }   
  
  // _handleDoubleClickItem = () =>{
    
    
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
            handleDoubleClickItem={this.handleDoubleClickItem}
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