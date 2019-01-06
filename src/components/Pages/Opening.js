import React from 'react';
class Opening extends React.Component {
    goToNextPage() {
        this.props.formCallback({ message: 'done' });
    }

    render() {
        return  <div className="question" >
                    <div>
                        <img src="wish.jpg" className="wish-opening" alt="hidden wish" />
                    </div>
                    <div style={{clear: "both", margin: "5%" }}>
                        <button type="button" className="btn btn-primary app-button" onClick={this.goToNextPage.bind(this)} >...המשך</button>
                    </div>
                </div>;
    }
}

export default Opening;