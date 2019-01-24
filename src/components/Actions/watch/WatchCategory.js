import React from 'react';
import NavigationButton from '../../Form/NavigationButton';
import videos from '../../../data/videos/videos.json';
import Thumb from '../watch/Thumb';
import WatchVideo from './WatchVideo';

class WatchCategory extends React.Component {
    constructor(props) {
        super();
        this.state = {
            videoId: null
        }
    }

    videoClicked(videoId) {
        this.setState({
            videoId: videoId
        });
    }

    reset(videoId) {
        this.setState({
            videoId: null
        });
    }

    render() {
        if(this.state.videoId) {
            return <div>
                <WatchVideo videoId={this.state.videoId} back={this.reset.bind(this)} />
            </div>
        }
        let videosThumbs =[];
        const currentCategory = (videos.watchPage.filter(x => x.category === this.props.category)).pop();
        console.log('currentCategory ', currentCategory);
        currentCategory.videos.forEach(video => {
            videosThumbs.push(
                <div>
                    <Thumb thumb={video} onClick={this.videoClicked.bind(this, video.id)} />
                </div>
                
            )
        });
        return  <div> 
                    <h3>{currentCategory.text}</h3>
                    <div>{videosThumbs}</div>
                    <div><NavigationButton text="...בחזרה" back={this.props.back} /></div>
                </div>
    }
}

export default WatchCategory;