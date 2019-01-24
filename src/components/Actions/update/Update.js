import React from 'react';
import NavigationButton from '../../Form/NavigationButton';
import actions from '../../../data/actions/actions.json';
import Thumb from '../watch/Thumb';
class Update extends React.Component {
    render() {
        let thumbs = [];
        let newsletters = actions.Update.newsletters;
        for (const key in newsletters) {
            if (newsletters.hasOwnProperty(key)) {
                const update = newsletters[key];
                thumbs.push(
                    <Thumb thumb={update.thumb} onClick={() => {window.open(update.formUrl, "_blank")}} />
                )
            }
        }

        return  <div> 
                    <div>{this.props.action.text}</div>
                    {thumbs}
                    <div><NavigationButton text="...בחזרה" back={this.props.back} /></div>
                </div>
    }
}

export default Update;