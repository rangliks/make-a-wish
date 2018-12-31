import React from 'react';

class NavigationButton extends React.Component {
    render() {
        return  <div>
                    <div style={{ clear: "both", margin: "5%" }}>
                        <button type="button" className="btn btn-primary" onClick={this.props.back} >{this.props.text}</button>
                    </div>
                </div>
    }
}

export default NavigationButton;