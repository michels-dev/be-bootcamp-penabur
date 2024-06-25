import React from 'react';
import HeroContent from './HeroContent';
import { faker } from '@faker-js/faker';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.generateFakeComments(),
    };
  }

  generateFakeComments = () => {
    const data = Array.from({ length: 3 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      chat: faker.lorem.sentence(),
      date: new Date().toLocaleString(),
      liked: 0,
    }));
    return data;
  };

  handleLike = (id) => {
    this.setState((prevState) => ({
      comments: prevState.comments.map((comment) =>
        comment.id === id ? { ...comment, liked: comment.liked + 1 } : comment
      ),
    }));
  };

  render() {
    return (
      <div>
        <h2 className="card-title p-10">Comments</h2>
        {this.state.comments.map((comment, index) => (
          <div key={comment.id}>
            <HeroContent
              avatar={comment.avatar}
              name={comment.name}
              chat={comment.chat}
              date={comment.date}
              liked={comment.liked}
              onLike={() => this.handleLike(comment.id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
