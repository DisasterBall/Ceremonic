import style from './css/imageViewer.module.css'

type ImageViewerProps = {
    imageUrl: string;
    onClose: () => void;
  };
  
  const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, onClose }) => {
    return (
      <div className={style.imageViewerOverlay} onClick={onClose}>
        <div className={style.imageViewerContainer}>
          <img src={imageUrl} className={style.imageViewerImage} />
        </div>
      </div>
    );
  };
  
  export default ImageViewer;