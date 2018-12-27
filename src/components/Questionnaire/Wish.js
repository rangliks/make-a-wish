import React from 'react';
import WishBox from './WishBox';
class Wish extends React.Component {
    render() {
        console.log("wish props");
        console.log(this.props);
        return <div className="wish" ><table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><WishBox answer={this.props.questions.firstAnswer}/></td>
                    <td><WishBox answer={this.props.questions.secondAnswer}/></td>
                </tr>
            </tbody>
        </table></div>;
    }
}

export default Wish;