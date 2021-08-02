import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../apis/youtube";

console.log("key", process.env.REACT_APP_YOUTUBE_DATA_API_KEY);

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("buildings"); //what it will originally load before we even search aka default
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      //async request
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_DATA_API_KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0], // when new video is search we will see the first video
    });
  };

  onVideoSelect = (video) => {
    // video object is what we fetch from youtube API this method is a callback
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} //passing on a video list
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
