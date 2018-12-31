import React from 'react';
import NavigationButton from '../Form/NavigationButton';

class Share extends React.Component {
    render() {
        return  <div> 
                    <div>{this.props.action.text}</div>
                    <div><NavigationButton text="...בחזרה" back={this.props.back} /></div>
                </div>
    }
}

export default Share;