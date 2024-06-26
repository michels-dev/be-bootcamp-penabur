import React from 'react';
import Liked from './Liked';

class HeroContent extends React.Component {
  render() {
    return (
      <div className="card bg-dark w-full text-dark text-sm font-GabaritoReguler mt-2">
        <div className="card-body">
          <div className="chat chat-start mb-0">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt={this.props.name} src={this.props.avatar} />
              </div>
            </div>
            <div className="chat-header">
              {this.props.name}
              <span className="text-xs opacity-50"> {this.props.date}</span>
            </div>
            <div className="chat-bubble">{this.props.chat}</div>
          </div>
          <Liked liked={this.props.liked} onLike={this.props.onLike} />
        </div>
      </div>
    );
  }
}

export default HeroContent;
