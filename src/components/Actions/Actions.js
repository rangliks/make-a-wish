import React from 'react';
import actionsJson from '../../actions/actions.json'

class Actions extends React.Component {
    constructor(props) {
        super();
        let modules = {};
        for (const moduleName in actionsJson) {
            modules[moduleName] = require(`./${moduleName}`);
        }

        this.state = {
            main: true,
            currentAction: '',
            modules
        }
    
    }

    actionClicked(action) {
        console.log(`action clicked ${JSON.stringify(action)}`);
        this.setState({
            main: false,
            currentAction: action
        })
    }

    resetState() {
        this.setState({
            main: true,
            currentAction: ''
        })
    }

    render() {
        let currentAction = this.state.currentAction;
        let actions = [];
        if(this.state.main) {
            for (let action in actionsJson) {
                let current = actionsJson[action];
                actions.push(
                    <div key={action} className="row">
                        <div className="col-6 col-md-4"></div>
                        <button type="button" onClick={this.actionClicked.bind(this, action)} className={`col-6 col-md-4 ${current.class}`}>{current.text}</button>
                    </div>
                )
            }
        } else {
            let Comp = this.state.modules[currentAction].default;
            actions.push(<Comp key={currentAction} action={actionsJson[currentAction]} back={this.resetState.bind(this)} />)
        }
        console.log('actions', this.state);
        return <div>{actions}</div>;
    }
}

export default Actions;