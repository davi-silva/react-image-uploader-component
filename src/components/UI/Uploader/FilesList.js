import React, {Fragment} from 'react'

import {
  ImagesList,
  Sep
} from '../../../styles/Components/UI/Uploader/FilesList'

const FilesList = (props) => {
  const {
    imagesArray, 
    width, 
    height
  } = props;


  return (
    <ImagesList width={width} height={height}>
      {imagesArray.length > 0 && (
        <>
          {imagesArray.map((image, index) => (
            <Fragment key={image.id}>
              <img src={image.preview} alt={image.name} />
              {!(imagesArray.length === index + 1) && (
                <Sep />
              )}
            </Fragment>
          ))}
        </>
      )}
    </ImagesList>
  )
}

export default FilesList;