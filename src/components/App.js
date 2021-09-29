import React from 'react'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App


// giphy key = ukGHwcmhsey8KlFFqC4vfyu8TDzmu0o9
// url 'dolphin' search = https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ukGHwcmhsey8KlFFqC4vfyu8TDzmu0o9&rating=g