import React from 'react';
import HeroContent from './HeroContent';
import { faker } from '@faker-js/faker';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  generateFakeComments = () => {
    const data = Array.from({ length: 3 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      chat: faker.lorem.sentence(),
      date: new Date().toLocaleString(),
    }));
    return data;
  };

  render() {
    const comments = this.generateFakeComments();

    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
          <HeroContent
            avatar={comment.avatar}
            name={comment.name}
            chat={comment.chat}
            date={comment.date}
          />
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
