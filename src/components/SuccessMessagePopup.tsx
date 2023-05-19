import Button from './Button'
import style from './css/successMessagePopup.module.css'
import Succes from '../assets/image/Page_iAmVendor/Succes.svg'

type ChildProps = {
    setIsSuccesPopupVisible: (isSuccesPopupVisible: boolean) => void
}

const SuccessMessagePopup: React.FC<ChildProps> = ({setIsSuccesPopupVisible}) => {
  
  
  
  return (
    <div className={style.popupOverlay}>
      <div className={style.popup}>
        <p className={style.message}>Інформація успішно оновлена!</p>
        <img src={Succes} alt="succes" style={{marginBottom: '20px'}}/>
        <Button kind='button_with-border' onClick={() => setIsSuccesPopupVisible(false)} 
        padding='9px 16px 10px 15px' width='89px' height='40px' fontSize='14px' 
        lineHeight='20px' fontWeight={500} borderRadius='50px'>ОК</Button>
      </div>
    </div>
  )
}

export default SuccessMessagePopup