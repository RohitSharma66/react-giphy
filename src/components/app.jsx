import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
    render() {
        const gifs = [
            { id: "H75nBnJkYObmXTdYeE" },
            { id: "thZAUGw8bGkOQ" },
            { id: "2AM9wp3LADyiGA52b4" },
            { id: "0kFXi5yDioWQQXnEIs" },
            { id: "cmUCI7oxpA3w6Rljux" },
            { id: "pGMZ8ue6qMPAGLNfXZ" },
            { id: "o5BLkJSxJv39Vp4Fss" },
            { id: "3oEduWssZ1RxHyebfy" },
            { id: "3ohhwAADQcO4Ti5LSo" }
        ];
        return (
            <div>
                <div className="left-scene">
                    <SearchBar />
                <div className="selected-gif">
                    <Gif id="Guccz4Oq87bncsm1j4" />
                </div>
                </div>
                <div className="right-scene">
                    <GifList  gifs={gifs} />
                </div>
            </div>
        );
    }
}
export default App;
