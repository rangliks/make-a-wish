import React from 'react';
import NavigationButton from '../../Form/NavigationButton';
import videos from '../../../data/videos/videos.json';
import WatchCategory from './WatchCategory';
import Thumb from './Thumb';
import WatchVideo from './WatchVideo';

class Watch extends React.Component {
    constructor() {
        super();
        this.state = {
            currentCategory: null
        }
    }

    categoryClicked(category) {
        console.log(category + ' clicked');
        this.setState({
            currentCategory: category
        })
    }

    reset() {
        this.setState({
            currentCategory: null
        })
    }

    render() {
        let categories = [];
        videos.watchPage.forEach(element => {
            console.log(element);
            categories.push(
                <Thumb thumb={element} onClick={this.categoryClicked.bind(this, element.category)}/>
            )
        });
        if (this.state.currentCategory) {
            return <div>
                <WatchCategory category={this.state.currentCategory} back={this.reset.bind(this)} />
            </div>
        }
        
        return <div>
            {categories}
            <NavigationButton text="...בחזרה" back={this.props.back} />
        </div>
    }
}

export default Watch;