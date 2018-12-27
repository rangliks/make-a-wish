import React from 'react';

class WishBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: this.props.wishIndex, showAnswer: this.props.answer.showAnswer, isRightAnswer: props.answer.isRight, answer: props.answer.answer };
        console.log('WishBox:', this.state);
    }

    wishClicked(e) {
        console.log('wishClicked' ,this.props);
        if(this.props.answer.clickable) {
            return this.props.clicked(e, this.state.index);
        } else {
            return  e.preventDefault();
        }
        
    }


    render() {
        let v = [];
        let j = 0;
        if(this.props.answer.isRight && this.props.answer.showAnswer) {
            v.push(
                <div key={'wish-' + j++}>
                    <a href="/" onClick={(e) => {e.preventDefault();}} style={{color: '#31a354'}}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </a>
                    <i className="em em-hugging_face"></i>
                </div>
            )
        }
        else if(!this.props.answer.isRight && this.props.answer.showAnswer) {
            v.push(
                <i key={'wish-' + j++} className="em em-confused"></i>
            )
        }
        console.log(this.props.answer);
        let classNameImg = this.props.answer.done ? 'answer blurry' : 'answer';
        return  this.props.answer.showAnswer ? 
                <div className="wish-box" onClick={this.wishClicked.bind(this)}>
                    <div className={classNameImg} style={{display: this.props.answer.showAnswer ? 'block' : 'none' }}>{v}  {this.props.answer.answer}</div>
                </div>
                :
                <div className="wish-box" onClick={this.wishClicked.bind(this)}>
                    <img src="wish.jpg" className="wish-hidden" style={{display: !this.props.answer.showAnswer ? 'block' : 'none' }} alt="hidden wish"/>
                </div>
    }
}

export default WishBox;