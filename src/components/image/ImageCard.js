import './Image.css';

const ImageCard=({image})=>{
    return (
		<div className={`image-card ${image.css}`}>
			<img src={image.url} alt="image" />
		</div>
    );
}

export default ImageCard;