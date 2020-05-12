import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = "AIzaSyBg31ZJsfw_mvc5Hx5s3URa2yujHRLBcPQ";

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {

        const response = await youtube.get('/search', {    //async request 
            params: {
                q: term,
                part: 'snippet',
                maxResult: 5,
                type: 'video',
                key: KEY
            }
        });
        this.setState({videos: response.data.items});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;