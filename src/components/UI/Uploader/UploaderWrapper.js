import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Uploader from './Uploader';
import FilesList from './FilesList';
import axios from 'axios';

const UploaderWraper = forwardRef((props, ref) => {
  const {
    width,
    height,
    imagesArray,
    handleSetImagesArray,
    isDragNotAcceptColor,
    isDragAcceptColor,
    isDragRejectColor,
    multipleFiles,
    apiEndpoint,
  } = props;
  const [processedFilesArray, setProcessedFilesArray] = useState([]);

  useEffect(() => {
    console.log(imagesArray);
  }, [imagesArray]);

  useEffect(
    () => () => {
      imagesArray.map((image) => {
        URL.revokeObjectURL(image.preview);
      });
    },
    []
  );

  useEffect(() => {
    handleSetImagesArray(processedFilesArray);
  }, [processedFilesArray]);

  const handleDeleteImage = async (index) => {
    const tempImagesArray = [...imagesArray];
    tempImagesArray.splice(index, 1);
    handleSetImagesArray(tempImagesArray);
  };

  const handleProcessFiles = () => {
    imagesArray.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file.file);
      await handleUploadFile(formData);
    });
    // handleSetImagesArray(processedFilesArray);
  };

  const handleUploadFile = async (formData, processedFilesArray) => {
    axios
      .post(`${apiEndpoint}`, formData)
      .then(async (response) => {
        console.log('response:', response);
        setProcessedFilesArray((oldProcessedFilesArray) => [
          ...oldProcessedFilesArray,
          response,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useImperativeHandle(ref, () => ({
    handleStartUploadingFiles() {
      handleProcessFiles();
    },
  }));

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
});

export default UploaderWraper;
