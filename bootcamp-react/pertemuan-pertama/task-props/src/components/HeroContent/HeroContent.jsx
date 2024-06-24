import React from 'react';

class HeroContent extends React.Component {
  render() {
    return (
      <div className="card bg-dark mt-5 w-full text-dark text-sm">
        <div className="card-body">
          <h2 className="card-title">Comments</h2>
          <div className="chat chat-start mb-5">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt={this.props.name} src={this.props.avatar} />
              </div>
            </div>
            <div className="chat-header">
              {this.props.name}
              <span className="text-xs opacity-50">{this.props.date}</span>
            </div>
            <div className="chat-bubble">{this.props.chat}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroContent;
