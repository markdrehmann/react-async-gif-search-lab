import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    query: ''
  }

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <div>
        <h2>Search:</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="query" value={this.state.query} onChange={event => this.handleQueryChange(event)} />
          <input type="submit" value="Find it, B!"/>
        </form>
      </div>
    )
  }
}