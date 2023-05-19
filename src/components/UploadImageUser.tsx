import { useEffect, useRef, useState } from "react"
import style from './css/uploadImageUser.module.css'


interface UploadImageUserProps {
    avatarFileName?: string;
}


export const UploadImageUser: React.FC<UploadImageUserProps> = ({avatarFileName}) => {
    const [uploaded, setUploaded] = useState('')

    const filePicker = useRef<HTMLInputElement>(null)

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const formData = new FormData();
        
          formData.append('avatarFile', event.target.files[0])
          
          setUploaded(URL.createObjectURL(event.target.files[0]))
          
        //   providerAvatar(formData)   
        }
      };

    const handleClick = () => {
        if(filePicker.current){
            filePicker.current.click()
        }
    }

    useEffect(() => {
        // setUploaded(`${import.meta.env.VITE_AVATAR_ROUTE}${avatarFileName}`)
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