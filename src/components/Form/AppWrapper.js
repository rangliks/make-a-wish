import React from 'react';
import Questionaire from '../Questionnaire/Questionaire';
import Opening from '../Pages/Opening';
import Communicate from '../Pages/Communicate';

class AppWrapper extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentStage: 0
        }

    }

    formCallback(formInfo) {
        console.log(this.state.currentStage + '=> ' + this.state.currentStage + 1)
        // if(formInfo.message === 'done') {
        this.setState({
            currentStage: this.state.currentStage + 1
        })
        // }
    }

    render() {
        switch (this.state.currentStage) {
            case 0:
                return <div><Opening formCallback={this.formCallback.bind(this)} /></div>;
            case 1:
                return <div><Questionaire formCallback={this.formCallback.bind(this)} /></div>;
            case 2:
                return <div><Communicate formCallback={this.formCallback.bind(this)} /></div>;
            case 3:
                return <div>3</div>;
            default:
                return <div>default</div>;
        }
    }
}

export default AppWrapper;