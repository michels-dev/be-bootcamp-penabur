import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import axios from 'axios';

class DashboardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      images: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { query } = this.state;
    axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=-4AAuvliWmJMVJwFbC_HhCq_tY_7Tr04jUu7RuHtIF0`)
    .then(response => {
      console.log(response.data.results);
      this.setState({ images: response.data.results });
    })
    .catch(error =>{
      console.error('Error fetching data', error);
    });
  }

  render() {
    const { title } = this.props;
    const { images } = this.state;
    return (
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <Card className="card-title" title={title} />
          <form onSubmit={this.handleSubmit} className='flex'>
            <InputText
              value={this.state.query}
              onChange={this.handleInputChange}
              className='m-0 input input-bordered input-sm w-full max-w-xs mt-2'
              placeholder='search image in here!'
            />
            <Button
              label='Submit'
              className='btn btn-outline btn-primary btn-sm mt-2 ml-4'
              type='submit'
            />
          </form>
          <div className="image-list mt-4">
            {images.map(image => (
              <Image
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                style={{ margin: '10px', width: '200px' }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardCard;
