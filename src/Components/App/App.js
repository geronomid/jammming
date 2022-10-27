import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SeachResults/SearchResults';
import Playlist from '../Playlist/Playlist';



class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      searchResults : 
        [{name:'Song1', artist:'Artist1', album: 'album1', id: 1},
        {name:'Song2', artist:'Artist2', album: 'album2', id: 2}, 
        {name:'Song3', artist:'Artist3', album: 'album3', id: 3}
        ],
      playListName : 'Music To Euthanise Horses To',
      playListTracks : [{name:'Song4', artist:'Artist4', album: 'album4', id: 4},
      {name:'Song5', artist:'Artist5', album: 'album5', id: 5}, 
      {name:'Song6', artist:'Artist6', album: 'album6', id: 6}
      ]
      }
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
    }  

  addTrack(track){
    let tracks = this.state.playListTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playListTracks: tracks});
  }  

  removeTrack(track){
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(selectedTrack => selectedTrack.id !== track.id);
    this.setState({playListTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playListName : name});
  }

  savePlaylist(){
    const trackUris =  this.state.playListTracks.map(track => track.uri)
  }

  search(term){
    console.log(term);
  }

  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch ={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack} />
          <Playlist playListName = {this.state.playListName} 
                    playListTracks = {this.state.playListTracks}
                    onRemove = {this.removeTrack}
                    onNameChange ={this.updatePlaylistName}
                    onSave = {this.savePlaylist}/>
        </div>
        </div>
      </div>
      
    )
  }
}

export default App;
