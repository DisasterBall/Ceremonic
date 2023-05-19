import { useState, useRef, useEffect } from 'react';
import style from './css/uploadFile.module.css'
import { providerAvatar } from '../http/userAPI';
import ImageViewer from './ImageViewer';

interface UploadFileProps {
    avatarFileName: string;
}


export const UploadFile: React.FC<UploadFileProps> = ({avatarFileName}) => {
    const [uploaded, setUploaded] = useState('')

    const filePicker = useRef<HTMLInputElement>(null)

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const formData = new FormData();
        
          formData.append('avatarFile', event.target.files[0])
          
          setUploaded(URL.createObjectURL(event.target.files[0]))
          
          providerAvatar(formData)   
        }
      };

    const handleClick = () => {
        if(filePicker.current){
            filePicker.current.click()
        }
    }

    useEffect(() => {
        setUploaded(`${import.meta.env.VITE_AVATAR_ROUTE}${avatarFileName}`)
      }, []);

    return (
        <>
            <div onClick={handleClick} className={style.uploadFile} 
            style={{ backgroundImage: `url(${uploaded})`, backgroundSize: 'cover',
            backgroundPosition: 'center', }} >
            {uploaded ? null : '+'}
            </div>
            <input type="file" className={style.hidden}
            accept='image/*,.png,.jpg,.jpeg,' 
            onChange={handleChange}
            ref={filePicker} />
        </>
    );
}
 
interface UploadSomeFilesProps {
    imageFileNames: string[],
    uploadedFiles: File[],
    deletedFiles: string[],
    setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>,
    setDeletedFiles: React.Dispatch<React.SetStateAction<string[]>>,

}

export const UploadSomeFiles: React.FC<UploadSomeFilesProps> = ({ imageFileNames, uploadedFiles, 
    deletedFiles, setUploadedFiles, setDeletedFiles }) => {

    const [showImage, setShowImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [showFiles, setShowFiles] = useState<string[]>([])

    const handleDelete = (imageUrl: string) => {
        setShowFiles((prevSelectedFiles) =>
          prevSelectedFiles.filter((fileUrl) => fileUrl !== imageUrl)
        )
        setDeletedFiles((prevDeletedFiles) => [...prevDeletedFiles, imageUrl]);
    }

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl)
        setShowImage(true)
    }
    const filePicker = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          const filesArray = Array.from(event.target.files)
          setUploadedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...filesArray])
          const filesUrlArray = filesArray.map((file) => URL.createObjectURL(file));
          setShowFiles((prevSelectedFiles) => [...prevSelectedFiles, ...filesUrlArray]);
        }
    }

    const handleClick = () => {
        if(filePicker.current){
            filePicker.current.click()
        }
    }
    
      useEffect(() => {
        let array = imageFileNames.map((file) => {
            return import.meta.env.VITE_IMAGES_ROUTE + file
        })
        setShowFiles(array)
      }, [])



    return (
        <>
            <div onClick={handleClick} className={style.uploadFile} style={{width: '217px', height: '270px', marginRight: '20px',}}>
                +
            </div>
            <input type="file" className={style.hidden}
            accept='image/*,.png,.jpg,.jpeg,' 
            onChange={handleChange}
            multiple
            ref={filePicker} />

            <div className={style.uploadedFiles}>
                {showFiles.map((fileUrl) => (    
                    <div key={fileUrl} className={style.uploadedFileContainer}>
                        <img
                        className={style.uploadedFile}
                        src={fileUrl}
                        alt="uploaded file"
                        onClick={() => handleImageClick(fileUrl)}
                        />
                        <button
                        className={style.deleteButton}
                        onClick={() => handleDelete(fileUrl)}
                        >
                        X
                        </button>
                    </div>
                ))}
            </div>
            
            {showImage && (
                <ImageViewer imageUrl={selectedImage} onClose={() => setShowImage(false)} />
            )}

        </>
    );
}