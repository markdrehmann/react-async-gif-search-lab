import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  fetchGifs = (query = 'no thank you') => {
    console.log(query)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ukGHwcmhsey8KlFFqC4vfyu8TDzmu0o9&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {this.setState({ gifs: data.map(gif => ({url: gif.images.original.url}))})})
  }

  componentDidMount() {
    this.fetchGifs();
  }

}