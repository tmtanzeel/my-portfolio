// THIS API RETURNS NUMBER OF VIEWS, SUBSCRIBERS AND VIDEOS

import React, { Component } from "react";

class YouTubeApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCOYqNBjmWF8j-PzI7ZPjt_w&key=AIzaSyAMeZQW6sUQgLdDTnMVeokfbcFcT2A9SuA"
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.items,
                    isLoaded: true
                });
            });
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) return <div>Loading...</div>;
        return (
            <div>
                <ul>
                    {
                        items.map(item => (
                            <p key={item.id}>
                                Total views: {item.statistics.viewCount} |
                                Total subscribers: {item.statistics.subscriberCount} |
                                Total videos: {item.statistics.videoCount}
                            </p>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default YouTubeApi;