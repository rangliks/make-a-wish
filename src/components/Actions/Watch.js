import React from 'react';
import NavigationButton from '../Form/NavigationButton';

class Watch extends React.Component {
    render() {
        return  <div>
                    <div>{this.props.action.text}</div>
                    <div><iframe title="watch" width="560" height="315" src="https://www.youtube.com/embed/duMOzUP06a4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <NavigationButton text="...בחזרה" back={this.props.back} />
                </div>
    }
}

export default Watch;