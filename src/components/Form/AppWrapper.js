import React from 'react';
import Questionaire from '../Questionnaire/Questionaire';
import Opening from '../Pages/Opening';
import Communicate from '../Pages/Communicate';
import Actions from '../Actions/Actions';
import ActionsPageVideo from '../Pages/ActionsPageVideo';

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

    skip() {
        this.setState({
            currentStage: this.state.currentStage + 1
        });
    }

    back() {
        if (this.state.currentStage > 0) {
            this.setState({
                currentStage: this.state.currentStage - 1
            });
        }
    }

    render() {
        let skip = <div style={{ clear: "both", margin: "5%" }}>
            <button type="button" className="btn btn-primary top-button-right" onClick={this.skip.bind(this)} >דלג</button>
        </div>;
        let back = <div style={{ clear: "both", margin: "5%" }}>
            <button type="button" className="btn btn-primary top-button-left" onClick={this.back.bind(this)} >חזור</button>
        </div>;
        let body;
        switch (this.state.currentStage) {
            case 0:
                skip = [];
                back = [];
                body = <div className="app-body-inner" ><Opening formCallback={this.formCallback.bind(this)} /></div>;
                break;
            case 1:
                body = <div className="app-body-inner" ><Questionaire formCallback={this.formCallback.bind(this)} /></div>;
                break;
            case 2:
                body = <div className="app-body-inner"><Communicate formCallback={this.formCallback.bind(this)} /></div>;
                break;
            case 3:
                body = <div className="app-body-inner"><ActionsPageVideo formCallback={this.formCallback.bind(this)} /></div>;
                break;
            case 4:
                body = <div className="app-body-inner"><Actions formCallback={this.formCallback.bind(this)} /></div>;
                break;
            case 5:
                body = <div className="app-body-inner">
                    <div style={{ clear: "both", margin: "5%" }}>
                        <button type="button" className="btn btn-primary" onClick={this.reset.bind(this)} >התחל מחדש</button>
                    </div>
                </div>;
                break;
            default:
                body = <div>default</div>;
                break;

        }

        return this.state.currentStage > 0 && this.state.currentStage < 4 ?
            <div>{body}{skip}{back}</div> :
            <div>{body}</div>;
    }
}

export default AppWrapper;