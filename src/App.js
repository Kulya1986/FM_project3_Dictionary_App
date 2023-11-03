
import './App.css';
import React,{ Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import WordSection from './components/WordSection/WordSection';
import Meaning from './components/Meaning/Meaning';
import NoResults from './components/NoResults/NoResults';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        theme:'white',
        font:'Lora',
        searchWord:'',
        serverRes:[],
        searchDone:false
    };
  }

  componentDidMount(){
    let body = document.querySelector('body');
    const preferredThemeLight = window.matchMedia('(prefers-color-scheme: light)');
    if (preferredThemeLight.matches)
    {
      this.setState({theme:'white'});
      body.style.backgroundColor='#FFF';
    }
    else{
      this.setState({theme:'black'});
      body.style.backgroundColor='#050505';
      document.querySelector('#theme-color').setAttribute('checked','');
    }
  }

  requestResultsForAutoSearch(word){
    if (word){
      const fetchUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
      fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({serverRes : data});
        }).catch(err => {console.log(err)});
    }
  }

  requestResultsForSearchWord = () => {
    
    if (this.state.searchWord){
      const fetchUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"+this.state.searchWord;
      fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({serverRes : data});
          this.setState({searchDone:true});
        }).catch(err => {console.log(err)});
    }
    else 
    {
        document.querySelector('#search-word').setAttribute('required','');
    }
  }

  onSynAntClick = (event) => {
    this.setState({searchWord:event.target.innerHTML});
    this.requestResultsForAutoSearch(event.target.innerHTML);
  }

  onSearchWordChange = (event) => {
    this.setState({searchWord:event.target.value}); 
  }

  onSearchSubmit = (event) => {
    if (event.key==="Enter" ) 
      this.requestResultsForSearchWord();
  }

  audioPlay = () =>{
    let audioSource = '';
    for(let i=0; i < this.state.serverRes[0].phonetics.length; i++){
        if (this.state.serverRes[0].phonetics[i].audio)
        {
            audioSource = this.state.serverRes[0].phonetics[i].audio;
            break;
        }
    }
    if (audioSource){
      const audio = new Audio(audioSource);
      audio.play();
    }  
  }

  colorThemeChange = () =>{
    let body = document.querySelector('body');
    if (this.state.theme==='black') {
      this.setState({theme:'white'});
      body.style.backgroundColor='#FFF';
    }else {
      this.setState({theme:'black'});
      body.style.backgroundColor='#050505';
    } 
  }
  
  fontChange = (selectedFont) =>{
    this.setState({font:selectedFont.value});
    document.querySelector('#container').style.fontFamily = selectedFont.value;
  }

  render(){  
    return(
          <div id='container' className={this.state.theme}>
            <Navigation 
                theme={this.state.theme} 
                colorThemeChange={this.colorThemeChange}
                fontChange={this.fontChange}
                />
            <main>
              <Search 
                  searchWord={this.state.searchWord}
                  theme={this.state.theme}
                  onSearchWordChange={this.onSearchWordChange} 
                  onSearchSubmit={this.onSearchSubmit} 
                  requestResultsForSearchWord={this.requestResultsForSearchWord}
              />
              {
                this.state.searchDone
                &&
                <div>
                  {
                      this.state.serverRes.length>0
                      ?
                      <div className='results'>
                        <WordSection 
                            serverRes={this.state.serverRes} 
                            audioPlay={this.audioPlay}/>
                        <Meaning 
                            serverRes={this.state.serverRes}
                            theme={this.state.theme}  
                            onSynAntClick={this.onSynAntClick}/>
                      </div>
                      :
                      <NoResults serverRes={this.state.serverRes}/>
                  }  
                </div>
              }
            </main>  
          </div>
    );
  }
}


export default App;
