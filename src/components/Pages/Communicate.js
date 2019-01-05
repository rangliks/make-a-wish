import React from 'react';

const SENTENCE_SPEED = 3000;

class Communicate extends React.Component {
    constructor(props) {
        super();
        this.state = {
            step: 0,
            complete: false,
            sentences: [
                <p className="communicate-text-line">,כולנו רוצים לחיות בעולם שליו, בעולם מלא חמלה</p>,
                <p className="communicate-text-line">,בעולם בו מכבדים את האחר</p>,
                <p className="communicate-text-line">.בעולם בו החזק עוזר לחלש ומגן עליו</p>,
                <p className="communicate-text-line">בואו ניקח חלק ביצירה של העולם בו נרצה לחיות</p>,
                <p className="communicate-text-line">נעשה כמיטב יכולתנו</p>,
                <p className="communicate-text-line">נימנע מאלימות</p>,
                <p className="communicate-text-line">נכבד אחרים</p>,
                <p className="communicate-text-line">נעזור לאחרים</p>,
                <p className="communicate-text-line">נפסיק לממן אלימות</p>,
                <p className="communicate-text-line">נפסיק לממן בתי מטבחיים</p>,
                <p className="communicate-text-line">נפיץ את המסר</p>,
                <p className="communicate-text-line">.נפקח עיניים, נלמד, ונמצא דרכים לפעול</p>,
                <p className="communicate-text-line">נתמוך באנשים ובארגונים שכבר פועלים</p>,
                <p className="communicate-text-line">.כדי ליצור את העולם לו אנו מייחלים</p>
            ]
        };
    }
    goToNextPage() {
        this.props.formCallback({ message: 'done' });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                step: 1
            })
        }, SENTENCE_SPEED);
    }

    componentDidUpdate() {
        console.log(this.state.step, this.state.sentences.length);
        if (this.state.step >= this.state.sentences.length) {
            setTimeout(() => {
                this.setState({
                    complete: true
                });
            }, SENTENCE_SPEED);
        } else {
            setTimeout(() => {
                this.setState({
                    step: this.state.step + 1
                });
            }, SENTENCE_SPEED);
        }
    }
    render() {

        let sentences = [];
        let next = [];
        for (let j = 0; j <= this.state.step; j++) {
            sentences.push(this.state.sentences[j]);
        }

        if (this.state.complete) {
            next.push(
                <div style={{ clear: "both", margin: "5%" }}>
                    <button type="button" className="btn btn-primary" onClick={this.goToNextPage.bind(this)} >...המשך</button>
                </div>
            )
        }
        return <div className="question" >
            <section className="communicate-sentences-section">
                <div>
                    <div>
                        <img src="wish.jpg" className="wish-communicate" alt="hidden wish" />
                    </div>
                    {sentences}
                    {next}
                </div>
            </section>
        </div>;
    }
}

export default Communicate;