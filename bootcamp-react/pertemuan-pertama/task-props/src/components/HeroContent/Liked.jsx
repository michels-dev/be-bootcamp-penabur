import React from 'react';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

class Liked extends React.Component {
  render() {
    return (
      <div className="font-GabaritoReguler">
        <span className="text-dark p-2"> your liked: {this.props.liked}</span>
        <Button onClick={this.props.onLike} className="btn btn-primary btn-sm btn-outline text-white pi pi-thumbs-up" />
      </div>
    );
  }
}

export default Liked;
