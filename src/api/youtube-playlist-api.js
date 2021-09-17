// THIS API RETURNS THE PLAYLISTS IN YOUR YOUTUBE CHANNEL

import { Button } from "reactstrap";
import React, { Component } from "react";

class YouTubePlaylistApi extends Component {

  style = {
    margin: "0px 5px 0px 5px"
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCOYqNBjmWF8j-PzI7ZPjt_w&key=AIzaSyAMeZQW6sUQgLdDTnMVeokfbcFcT2A9SuA"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.items
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    var i = 0;
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          {
            items.map(item => (
              <Button style={this.style} key={item.id}>
                Playlist: {items[i++].snippet.title}
              </Button>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default YouTubePlaylistApi
