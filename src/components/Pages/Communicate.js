import React from 'react';
class Communicate extends React.Component {
    goToNextPage() {
        this.props.formCallback({ message: 'done' });
    }

    render() {
        return <div className="question" >
            <section>
                <div>
                    <p> כולנו רוצים לחיות בעולם שליו, בעולם מלא חמלה,</p>
                    <p>בעולם בו מכבדים את האחר,</p>
                    <p> בעולם בו החזק עוזר לחלש ומגן עליו.</p>
                    <p>בואו ניקח חלק ביצירה של העולם בו נרצה לחיות</p>
                    <p>נעשה כמיטב יכולתנו</p>
                    <p>נימנע מאלימות</p>
                    <p>נכבד אחרים</p>
                    <p>נעזור לאחרים</p>
                    <p>נפסיק לממן אלימות</p>
                    <p>נפסיק לממן בתי מטבחיים</p>
                    <p>נפיץ את המסר</p>
                    <p>נפקח עיניים, נלמד, ונמצא דרכים לפעול.</p>
                    <p>נתמוך באנשים ובארגונים שכבר פועלים</p>
                    <p>כדי ליצור את העולם לו אנו מייחלים.</p>
                </div>
            </section>
            <section className="question" >
                <div>
                    <img src="wish.jpg" className="wish-communicate" alt="hidden wish" />
                </div>
                <div style={{ clear: "both", margin: "5%" }}>
                    <button type="button" className="btn btn-primary" onClick={this.goToNextPage.bind(this)} >...המשך</button>
                </div>
            </section>
        </div>;
    }
}

export default Communicate;