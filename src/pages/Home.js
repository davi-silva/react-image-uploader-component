import React, { useState, useEffect } from 'react';
import UploaderWrapper from '../components/UI/Uploader/UploaderWrapper'

const Home = () => {
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    console.log(imagesArray)
  }, [imagesArray]);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  // const handleDeleteImage = async (index) => {
  //   const tempImagesArray = [...imagesArray];
  //   tempImagesArray.splice(index, 1)
  //   setImagesArray(tempImagesArray);
  // }



  return (
    <div>
      <UploaderWrapper
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
      />
    </div>
  );
};

export default Home;
