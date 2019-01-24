import React from 'react';
import NavigationButton from '../Form/NavigationButton';
import videos from '../../data/videos/videos.json';

class ActionsPageVideo extends React.Component {
    render() {
        let video = videos.actionsPage;
        let src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
        return  <div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe title="act" className="embed-responsive-item" src={src}></iframe>
                    </div>
                    <div><NavigationButton text="המשך" back={this.props.formCallback} /></div>
                </div>
    }
}

export default ActionsPageVideo;