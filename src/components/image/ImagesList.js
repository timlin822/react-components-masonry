import {useState,useEffect} from 'react';

import ImageCard from './ImageCard';

import IMAGES_DATA from 'data/ImagesData';

import './Image.css';

const ImagesList=()=>{
    const [images,setImages]=useState([]);

    const shuffleImages=()=>{
        setImages(IMAGES_DATA.sort(()=>Math.random()-0.5));
    };

    useEffect(()=>{
        shuffleImages();
    },[]);

    return (
        <div className="image-grid">
            {images.map((image,index)=>(
                <ImageCard key={index} image={image} />
            ))}
        </div>
    );
}

export default ImagesList;