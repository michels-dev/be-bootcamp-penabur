import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import BtnSubmitVideos from '../Buttons/BtnSubmitVideo';
import { apiClientVideos } from '../../api/apiClientVideos';

const VideosCard = ({ title }) => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    apiClientVideos(query)
      .then(videos => {
        console.log('Fetched Videos:', videos); // Debug log
        setVideos(videos);
        if (videos.length > 0) {
          setSelectedVideo(videos[0]); // Set the first video as the selected video
        } else {
          setSelectedVideo(null); // No videos found
        }
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
            ref={inputRef}
            value={query}
            onChange={handleInputChange}
            className='m-0 input input-bordered input-sm w-full max-w-xs mt-2'
            placeholder='Search videos here!'
          />
          <BtnSubmitVideos onclick={handleSubmit} />
        </form>
        {selectedVideo && (
          <div className="video-player mt-4">
            <h3>{selectedVideo.snippet.title}</h3>
            <iframe
              title="video-player"
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            />
            <p>{selectedVideo.snippet.description}</p>
          </div>
        )}
        {videos.length > 0 && (
          <div className="video-list mt-4">
            <h3>Search Results:</h3>
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="video-item"
                onClick={() => setSelectedVideo(video)}
                style={{
                  cursor: 'pointer',
                  marginBottom: '10px',
                  padding: '10px',
                  border: selectedVideo && selectedVideo.id.videoId === video.id.videoId ? '2px solid #007BFF' : '2px solid transparent',
                }}
              >
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                <h4>{video.snippet.title}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosCard;
