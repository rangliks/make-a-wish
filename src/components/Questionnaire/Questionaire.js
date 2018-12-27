import React from 'react';
import Question from './Question';
import WishBox from "./WishBox";
import questionsJson from '../../questionaires/questions.1.json';

class Questionaire extends React.Component {
    constructor(props) {
        super();
        this.state = {
            questions: questionsJson,
            totalQuestions: questionsJson.questions.length,
            currentQuestion: 0,
            done: false
        };

        this.state.questions.questions.forEach(question => {
            question.answers[0].clickable = true;
            question.answers[1].clickable = true;
            question.answers[0].showAnswer = false;
            question.answers[1].showAnswer = false;
            question.answers[0].done = false;
            question.answers[1].done = false;
        });
        console.log('initial state', this.state);
    }

    answerClick(event, wishIndex) {
        let otherIndex = Math.abs(wishIndex - 1);
        let questionsObj = Object.assign({}, this.state.questions);
        let qs = questionsObj.questions[this.state.currentQuestion];
        let chosen = qs.answers[wishIndex];
        let currentRow = this.state.currentQuestion;
        // opened right answer
        if (chosen.isRight && !chosen.showAnswer) {
            console.log('opened right answer');
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].showAnswer = true;
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].clickable = false;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].showAnswer = true;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].clickable = false;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].done = true;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].done = true;

            console.log('llll')
            console.log(currentRow, this.state)
            if (currentRow < this.state.totalQuestions) {
                currentRow++;
            }
        }
        // console.log(`right [${rightAnswer}]`);
        // opened wrong answer
        else if (!chosen.isRight && !chosen.showAnswer) {
            console.log('opened wrong answer');
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].showAnswer = true;
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].clickable = true;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].showAnswer = false;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].clickable = false;
            setTimeout(() => {
                let nuState = Object.assign({},
                    this.state
                );
                console.log("this.state")
                console.log(this.state)
                nuState.questions.questions[this.state.currentQuestion].answers[wishIndex].showAnswer = false;
                nuState.questions.questions[this.state.currentQuestion].answers[wishIndex].clickable = true;
                nuState.questions.questions[this.state.currentQuestion].answers[otherIndex].showAnswer = false;
                nuState.questions.questions[this.state.currentQuestion].answers[otherIndex].clickable = true;
                this.setState({
                    nuState
                })
            }, 1500);
        }

        // closed wrong answer
        else if (!chosen.isRight && chosen.showAnswer) {
            console.log('closed wrong answer');
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].showAnswer = false;
            questionsObj.questions[this.state.currentQuestion].answers[wishIndex].clickable = true;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].showAnswer = false;
            questionsObj.questions[this.state.currentQuestion].answers[otherIndex].clickable = true;
        }

        // console.log(`answer clicked is [${wishIndex} - ${chosen.answer}] current question above:`);
        //console.log(this.props);

        this.setState({
            ...this.state,
            questions: questionsObj,
            currentQuestion: currentRow
        })
    }

    goToNextPage() {
        this.props.formCallback({ message: 'done' });
    }

    render() {
        // console.log(this.state.currentQuestion, this.state.totalQuestions)
        let qs = this.state.questions.questions[this.state.currentQuestion];
        let answersRows = [];
        for (let i = 0; i <= this.state.currentQuestion; i++) {
            if (i >= this.state.totalQuestions) break;
            let row = this.state.questions.questions[i];
            answersRows.push(
                <tr key={i}>
                    <td><WishBox answer={row.answers[0]} clicked={this.answerClick.bind(this)} wishIndex={0} /></td>
                    <td><WishBox answer={row.answers[1]} clicked={this.answerClick.bind(this)} wishIndex={1} /></td>
                </tr>
            );
        }
        let nextButton = <div />;
        if (this.state.currentQuestion >= this.state.totalQuestions) {
            nextButton = <ul className="pager">
                <li><button type="button" className="btn btn-primary" onClick={this.goToNextPage.bind(this)} >...המשך</button></li>
            </ul>
        }
        // console.log('question is');
        // console.log(this.state.questions.questions[this.state.currentQuestion]);
        return <div className="wish" >
            <Question question={qs ? qs.question : ''} />
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{answersRows}</tbody>
            </table>
            {nextButton}
        </div>
    }
}

export default Questionaire;