import React from 'react';
import Question from './Question';
import WishBox from "./WishBox";
import questionsJson from '../../data/questionaires/questions.json';

class Questionaire extends React.Component {
    constructor(props) {
        super();
        this.state = {
            finalSentence: questionsJson.final_sentence,
            startSentence: questionsJson.final_sentence,
            questions: questionsJson,
            totalQuestions: questionsJson.questions.length,
            currentQuestion: 0,
            done: false
        };

        this.state.questions.questions.forEach(question => {
            question.answers[0].clickable = false;
            question.answers[1].clickable = false;
            question.answers[0].showAnswer = false;
            question.answers[1].showAnswer = false;
            question.answers[0].done = false;
            question.answers[1].done = false;
        });

        this.state.questions.questions[0].answers[0].showAnswer = true;
        this.state.questions.questions[0].answers[1].showAnswer = true;
        this.state.questions.questions[0].answers[0].clickable = true;
        this.state.questions.questions[0].answers[1].clickable = true;
        console.log('initial state', this.state);
    }

    answerClick(event, wishIndex) {
        let otherIndex = Math.abs(wishIndex - 1);
        let questionsObj = Object.assign({}, this.state.questions);
        let qs = questionsObj.questions[this.state.currentQuestion];
        let chosen = qs.answers[wishIndex];
        let currentRow = this.state.currentQuestion;
        let nextRow = this.state.currentQuestion + 1;
        // opened right answer
        if (chosen.isRight) {
            console.log('opened right answer');
            questionsObj.questions[currentRow].answers[wishIndex].showAnswer = true;
            questionsObj.questions[currentRow].answers[wishIndex].clickable = false;
            questionsObj.questions[currentRow].answers[otherIndex].showAnswer = true;
            questionsObj.questions[currentRow].answers[otherIndex].clickable = false;
            questionsObj.questions[currentRow].answers[wishIndex].done = true;
            questionsObj.questions[currentRow].answers[otherIndex].done = true;

            console.log(currentRow, this.state.totalQuestions)
            if (nextRow < this.state.totalQuestions) {
                questionsObj.questions[nextRow].answers[wishIndex].showAnswer = true;
                questionsObj.questions[nextRow].answers[wishIndex].clickable = true;
                questionsObj.questions[nextRow].answers[otherIndex].showAnswer = true;
                questionsObj.questions[nextRow].answers[otherIndex].clickable = true;
            }
            
            currentRow++;
        }
        
        // opened wrong answer
        else if (!chosen.isRight && !chosen.showAnswer) {
            console.log('opened wrong answer');
        }

        console.log(questionsObj);

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
        if(this.state.finalSentence) {
            setTimeout(() => {
                this.setState({
                    finalSentence: null
                })
            }, 2000);
            return <div className="wish" >
            <Question question={this.state.finalSentence} />
        </div>
        }

        let qs = this.state.questions.questions[this.state.currentQuestion];
        let answersRows = [];
        for (let i = 0; i <= this.state.totalQuestions; i++) {
            if (i >= this.state.totalQuestions) break;
            let row = this.state.questions.questions[i];
            answersRows.push(
                <tr key={i}>
                    <td className="col-8"><WishBox answer={row.answers[0]} clicked={this.answerClick.bind(this)} wishIndex={0} /></td>
                    <td className="col-8"><WishBox answer={row.answers[1]} clicked={this.answerClick.bind(this)} wishIndex={1} /></td>
                </tr>
            );
        }
        let nextButton = <div />;
        let done = this.state.currentQuestion >= this.state.totalQuestions;
        if (done) {
            nextButton = <ul className="pager">
                <li><button type="button" className="btn btn-primary app-button" onClick={this.goToNextPage.bind(this)} >...המשך</button></li>
            </ul>
        }
        
        let question = qs ? qs.question : this.state.startSentence;
        return <div className="wish" >
            <Question question={question} />
            <table cellspacing="0" cellpadding="0">
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