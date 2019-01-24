import React from 'react';
import NavigationButton from '../../Form/NavigationButton';

class WatchVideo extends React.Component {
    render() {
        return  <div>
                    <div><iframe title="watch" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <NavigationButton text="...בחזרה" back={this.props.back} />
                </div>
    }
}

export default WatchVideo;