import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import DiscAnimation from '../components/discAnimation/DiscAnimation';
import logoTmp from './cover.jpg';
import Captions from '../components/captions/Captions';
import querystring from 'query-string';

class App extends Component{
  constructor() {
    super();
    this.state = {
      song: null,
      loggedIn: false
    };
  }

  componentDidMount() {
    let parsed = querystring.parse(window.location.search);
    if(parsed.access_token)
    {

      //let accesToken = parsed.access_token;
      let accesToken = sessionStorage.getItem('token');
      this.setState({loggedIn: true});

      setInterval(() => {fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization':
        "Bearer " +
        accesToken,
      },
    })
      .then((response) => {if(!response.ok)
        {throw Error('Could not fetch');} 
        return(response.json());
      })
      .then((song) => {
                if(song?.item === null)
        {
          throw Error('No song data');
        }
        if(song !== this.state.song)
        this.setState({ song: song })
        
      })
      .catch((err) => {
        console.log("did catch " + err); 
        this.setState({ song: null }); 
        console.log(this.state.song)})}, 500);
  }
  
}   
  render (){
  let song = this.state.song;
  let Artists
  if(song !== null)
  {
      console.log(song);
    Artists = song.item.artists.reduce(function(previousValue, currentValue, index, array,) 
    {
      return previousValue + currentValue.name + ", ";
    }, ""
  ); 
    Artists.trimEnd();
    Artists = Artists.substr(0, Artists.length - 2)
}
    return(
    <div className="App">
      {this.state.loggedIn ?
      <div>
        <DiscAnimation discCover={song !== null? song?.item?.album?.images[0]?.url:logoTmp} animationDuration="5s" animationPaused={(song&&song.is_playing?"running":"Paused")}/>
        <Captions  name={(song?song?.item?.name:"no data")} artist={(song?Artists:"no data")} album={((song !== null)?song?.item?.album?.name:"no data")}/>
      </div> 
    : <button onClick={() => {
      window.location = window.location.href.includes('localhost') ? 'http://localhost:8888/login': '';
    }}
    style={{padding: '20px', 'fontSize': '50px', 'marginTop': '20px'}}>Sign In with Spotify</button>}
    
    </div>
    );
  };
}

export default App;
