import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { apiClientImages } from '../../api/apiClientImages';
import Masonry from "react-responsive-masonry";
import BtnSubmitImages from '../Buttons/BtnSubmitImages';

const DashboardCard = ({ title }) => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    apiClientImages(query)
      .then(images => {
        setImages(images.slice(0, 10)); // Limit to 10 images
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <Card className="card-title" title={title} />
        <form onSubmit={handleSubmit} className='flex'>
          <InputText
            ref={inputRef} // Assign the ref to the InputText component
            value={query}
            onChange={handleInputChange}
            className='m-0 input input-bordered input-sm w-full max-w-xs mt-2'
            placeholder='Search image here!'
          />
          <BtnSubmitImages onclick={handleSubmit} />
        </form>
        {images.length > 0 && ( // Conditionally render the image list
          <div className="image-list mt-4">
            <Masonry columnsCount={3} gutter="10px">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  style={{
                    height: index % 2 ? "200px" : "250px",
                    backgroundImage: `url(${image.urls.small})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: "10px",
                    borderRadius: "8px"
                  }}
                />
              ))}
            </Masonry>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;

