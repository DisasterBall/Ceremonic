import Button from '../components/Button';
import { UploadFile, UploadSomeFiles } from '../components/UploadFile';
import style from './css/vendor.module.css'

import GEO from '../assets/image/Page_iAmVendor/GEO.svg'
import { useEffect, useState } from 'react';
import { currentDataProvider, fetchCurrentUser } from '../http/userAPI';
import MySelectCity from '../components/MySelectCity';
import { providerDataAvatar } from '../http/userAPI';
import SuccessMessagePopup from '../components/SuccessMessagePopup';


type dataProvider = {
  firstName: string,
  lastName: string,
  serviceName: string,
  brandName: string,
  avatarFileName: string,
  imageFileNames: string[],
  info: string,
  placeName: string,
  geolocation: string,
  city: string,
  averagePrice: {
    min: number,
    max: number,
  }
}

interface Range {
  min: number;
  max: number;
}

const Vendor: React.FC = () => {

  const [selectedPrice, setSelectedPrice] = useState<string>('')
  const [averagePrice, setAveragePrice] = useState<Range>({ min: 0, max: 0 })

  const [selectedGuestCount, setSelectedGuestCount] = useState<string>('')
  const [guestCount, setGuestCount] = useState<Range>({ min: 0, max: 0 })

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [info, setInfo] = useState<string>('')
  const [geolocation, setGeolocation] = useState<string>('')
  const [city, setCity] = useState<string>('')

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [deletedFiles, setDeletedFiles] = useState<string[]>([])

  const [isSuccesPopupVisible, setIsSuccesPopupVisible] = useState(false)

  const [isProviderPlace, setIsProviderPlace] = useState(false)

  const handleClick = () => {
    const formData = new FormData()
    formData.append("Info", info);
    formData.append("Geolocation", geolocation);
    formData.append("City", city);
    formData.append("AveragePrice.Min", averagePrice.min.toString());
    formData.append("AveragePrice.Max", averagePrice.max.toString());
    formData.append("GuestCount.Min", guestCount.min.toString());
    formData.append("GuestCount.Max", guestCount.max.toString());

    deletedFiles.forEach((imageName: string) => {
      formData.append("DeletedImageNames", imageName);
    })

    uploadedFiles.forEach((imageFile: File) => {
      formData.append("AddedImageFiles", imageFile);
    })
    providerDataAvatar(formData).then(data => {
      if(data.statusText.toString() === 'OK'){
        setIsSuccesPopupVisible(true)
      }
    })
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(event.target.value)
    const [min, max] = event.target.value.split(" ")
    setAveragePrice({ min: parseInt(min), max: parseInt(max) })
    
  }

  const handleGuestCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGuestCount(event.target.value)
    const [min, max] = event.target.value.split(" ")
    setGuestCount({ min: parseInt(min), max: parseInt(max) })
    
  }

  const [provider, setProvider] = useState<dataProvider>({
    firstName: '',
    lastName: '',
    serviceName: '',
    brandName: '',
    avatarFileName: '',
    imageFileNames: [],
    info: '',
    placeName: '',
    geolocation: '',
    city: '',
    averagePrice: { min: 0, max: 0 }
  })


  useEffect(() => {
    Promise.all([fetchCurrentUser(), currentDataProvider()])
      .then(([currentUserResponse, currentDataProviderResponse]) => {
        setProvider(prevProvider => ({
          ...prevProvider,
          firstName: currentUserResponse.firstName,
          lastName: currentUserResponse.lastName,
          serviceName: currentDataProviderResponse.serviceName,
          brandName: currentDataProviderResponse.brandName,
          avatarFileName: currentDataProviderResponse.avatarFileName,
          imageFileNames: currentDataProviderResponse.imageFileNames,
          info: currentDataProviderResponse.info,
          placeName: currentDataProviderResponse.placeName,
          geolocation: currentDataProviderResponse.geolocation,
          city: currentDataProviderResponse.city,
          averagePrice: {
            min: currentDataProviderResponse.averagePrice.min,
            max: currentDataProviderResponse.averagePrice.max
          }
        }))
        const pos: number = import.meta.env.VITE_PROVIDER_PLACE.indexOf(currentDataProviderResponse.serviceName)
        if(pos !== -1){
          setIsProviderPlace(true)
        }
        setInfo(currentDataProviderResponse.info)
        setCity(currentDataProviderResponse.city)
        setSelectedPrice(currentDataProviderResponse.averagePrice.min.toString() + ' ' + 
          currentDataProviderResponse.averagePrice.max.toString())
        setAveragePrice({ min: currentDataProviderResponse.averagePrice.min, 
          max: currentDataProviderResponse.averagePrice.max })
        setIsLoading(false)  
      })
  }, [])


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.vendor}>
      <div className={style.textButton}>
        <p className={style.topText}>
          Ця інформація потрібна користувачам при пошуці постачальників, щоб ваші цільові клієнти могли знайти вас.
        </p>
        <Button kind="button_with-border" width='279px' height='40px' fontWeight={500} fontSize='14px' lineHeight='20px'>
          Як користувачі бачать ваш профіль</Button>
      </div>

      <div className={style.wrapper}>
        <div className={style.left}>
          <UploadFile avatarFileName={provider.avatarFileName}/>
          <p className={style.left_name_service}>
            {provider.firstName} {provider.lastName}, {provider.serviceName}
          </p>
        </div>

        <div className={style.right}>
          <p className={style.right_topText}>
            Додайте опис вашої діяльності
          </p>
          <textarea className={style.textarea} value={info} onChange={e => setInfo(e.target.value)} placeholder='Текст...'></textarea>

          <p className={style.right_text}>
            Оберіть приблизну локацію вашого весілля
          </p>
          <div className={style.right_GEOlocation}>
            <div className={style.right_GEOlocation_icon}>
              <img src={GEO} alt="icon" />
            </div>
            56.128333, 43.484493
          </div>

          <p className={style.right_text}>
            Введіть назву міста або область, у якій ви можете надавати послуги
          </p>
          <MySelectCity city={city} setCity={setCity}/>

          <p className={style.right_text}>
            Оберіть ваш середній прайс 
          </p>
          <div className={style.right_cost}>
            <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
              <input className={style.right_cost_radio_input} type="radio" name="cost" id="cost_1" 
              value="0 1699" checked={selectedPrice === '0 1699'} onChange={handlePriceChange}/>
              <label htmlFor="cost_1">до 1 700  грн</label> 
              <span className={style.right_cost_icon} style={{marginLeft: '59px'}}>$$</span>
            </div>

            <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
              <input className={style.right_cost_radio_input} type="radio" name="cost" id="cost_2" 
              value="1700 3000" checked={selectedPrice === '1700 3000'} onChange={handlePriceChange}/>
              <label htmlFor="cost_2">1 700-3000 грн</label>
              <span className={style.right_cost_icon} style={{marginLeft: '42.5px'}}>$$$</span>
            </div>

            <div className={style.right_cost_radio}>
              <input className={style.right_cost_radio_input} type="radio" name="cost" id="cost_3" 
              value="3001 0" checked={selectedPrice === '3001 0'} onChange={handlePriceChange} />
              <label htmlFor="cost_3">більше 3000 грн</label> 
              <span className={style.right_cost_icon} style={{marginLeft: '30px'}}>$$$$</span>
            </div>
          </div>

          {isProviderPlace && <>
            <p className={style.right_text}>
              Оберіть скільки людей ваше місце вміщує
            </p>
            <div className={style.right_cost}>
              <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
                <input className={style.right_cost_radio_input} type="radio" name="quantity" id="quantity_1"
                value="0 19" checked={selectedGuestCount === '0 19'} onChange={handleGuestCountChange} />
                <label htmlFor="cost_1">менше 20</label>
              </div>

              <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
                <input className={style.right_cost_radio_input} type="radio" name="quantity" id="quantity_2"
                value="20 50" checked={selectedGuestCount === '20 50'} onChange={handleGuestCountChange} />
                <label htmlFor="cost_1">20 - 50</label>
              </div>

              <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
                <input className={style.right_cost_radio_input} type="radio" name="quantity" id="quantity_3"
                value="51 100" checked={selectedGuestCount === '51 100'} onChange={handleGuestCountChange} />
                <label htmlFor="cost_1">51 - 100 </label>
              </div>

              <div className={style.right_cost_radio} style={{marginBottom: '14px'}}>
                <input className={style.right_cost_radio_input} type="radio" name="quantity" id="quantity_4"
                value="101 150" checked={selectedGuestCount === '101 150'} onChange={handleGuestCountChange} />
                <label htmlFor="cost_1">101 - 150 </label>
              </div>

              <div className={style.right_cost_radio}>
                <input className={style.right_cost_radio_input} type="radio" name="quantity" id="quantity_5"
                value="151 0" checked={selectedGuestCount === '151 0'} onChange={handleGuestCountChange} />
                <label htmlFor="cost_1">більше  150 </label>
              </div>
            </div>
          </>}
          
          <p className={style.right_text}>
            Фотогалерея
          </p>
          <div className={style.right_gallery}>
            <UploadSomeFiles imageFileNames={provider.imageFileNames} uploadedFiles={uploadedFiles} deletedFiles={deletedFiles} 
            setUploadedFiles={setUploadedFiles} setDeletedFiles={setDeletedFiles}/>
          </div>

          <Button kind="button_with-border" width='108px' height='40px' 
          fontWeight={400} fontSize='14px' lineHeight='20px' onClick={handleClick}>
          Зберегти </Button>
        </div>

      </div>

      {isSuccesPopupVisible && 
        <SuccessMessagePopup setIsSuccesPopupVisible={setIsSuccesPopupVisible} />
      }

    </div>
  );
}

export default Vendor;