import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Image = ({image, caption}) => {
  return (
    <figure>
      <img src={useBaseUrl(image)} />
      {caption ? <figcaption align='center'>{caption}</figcaption> : null}
    </figure>
  );
};

export default Image;
