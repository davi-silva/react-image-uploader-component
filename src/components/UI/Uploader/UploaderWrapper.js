import React, { useEffect } from 'react';
import Uploader from './Uploader';
import FilesList from './FilesList';

const UploaderWraper = (props) => {
  const {
    width,
    height,
    imagesArray,
    handleSetImagesArray,
    isDragNotAcceptColor,
    isDragAcceptColor,
    isDragRejectColor,
    multipleFiles,
  } = props;

  useEffect(() => {
    console.log(imagesArray);
  }, [imagesArray]);

  const handleDeleteImage = async (index) => {
    const tempImagesArray = [...imagesArray];
    tempImagesArray.splice(index, 1);
    handleSetImagesArray(tempImagesArray);
  };

  return (
    <div>
      <Uploader
        width={width}
        height={height}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor={isDragNotAcceptColor}
        isDragAcceptColor={isDragAcceptColor}
        isDragRejectColor={isDragRejectColor}
        multipleFiles={multipleFiles}
      >
        {imagesArray.length > 0 && (
          <FilesList
            imagesArray={imagesArray}
            handleDeleteImage={handleDeleteImage}
            width={width}
            height={height}
          />
        )}
      </Uploader>
    </div>
  );
};

export default UploaderWraper;
