import React from 'react';
import { useState } from 'react';

const FileInput = () => {

  const [imgSrc, setImgSrc] = useState('');

  const handleImgUpload = (e) => {
    console.log(e.target.files[0]);
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    console.log(imgSrc);
  }
  return (
    <>
      <div className="input-group mb-3">
        <input type="file" name="" id="inputFile" accept='image/*' className='form-control' onChange={handleImgUpload} />
        <label htmlFor="" className='input-group-text'>Upload</label>
      </div>
      <div className='preview'>
        {imgSrc && <img className='w-25' src={imgSrc} alt='1212' />}
      </div>
    </>
  );
};

export default FileInput;