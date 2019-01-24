import React from 'react';
class Thumb extends React.Component {
    render() {
        let src = this.props.thumb.id ? `https://img.youtube.com/vi/${this.props.thumb.id}/0.jpg` :
                                        this.props.thumb.url;
        return  <div className="col-sm-3" style={{    paddingTop: "10px"}} >
                    <h6>{this.props.thumb.description}</h6>
                    <img onClick={this.props.onClick} className="img-thumbnail" style={{cursor: "pointer"}} src={src} alt="watch" />
                </div>
    }
}

export default Thumb;