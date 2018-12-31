import React from 'react';
import Questionaire from '../Questionnaire/Questionaire';
import Opening from '../Pages/Opening';
import Communicate from '../Pages/Communicate';
import Actions from '../Actions/Actions';

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

    reset() {
        this.setState({
            currentStage: 0
        })
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
                return <div><Actions formCallback={this.formCallback.bind(this)} /></div>;
            case 4:
                return  <div>
                            <div style={{ clear: "both", margin: "5%" }}>
                                <button type="button" className="btn btn-primary" onClick={this.reset.bind(this)} >התחל מחדש</button>
                            </div>
                        </div>;
            default:
                return <div>default</div>;
        }
    }
}

export default AppWrapper;