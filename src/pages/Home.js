import React, { useState, useRef } from 'react';
import UploaderWrapper from '../components/UI/Uploader/UploaderWrapper';

const Home = () => {
  const [imagesArray, setImagesArray] = useState([]);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  const childRef = useRef();

  return (
    <div>
      <UploaderWrapper
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='http://localhost:5000/admin/products/publish/media'
      />
      {imagesArray.length > 0 && (
        <button
          onClick={() => {
            childRef.current.handleStartUploadingFiles();
          }}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default Home;
