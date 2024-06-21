import React from 'react';
import { faker } from '@faker-js/faker';

const HeroContent = () => {
  const users = Array.from({ length: 3 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    chat: faker.lorem.sentence(),
    date: new Date().toLocaleString(),
  }));

  return (
    <div>
      <div className="card bg-dark mt-10 w-full text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-white">Comment ({users.length})</h2>
          {users.map((user) => (
            <div key={user.id} className="text-white chat chat-start mb-4">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt={user.name} src={user.avatar} />
                </div>
              </div>
              <div className="chat-header">
                {user.name}
                <time className="text-xs opacity-50">{user.date}</time>
              </div>
              <div className="chat-bubble">{user.chat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;