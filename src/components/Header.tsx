import { useEffect, useState } from 'react';
import styles from "./css/header.module.css"
import nameProduct from "../assets/image/header/NameProduct.png"
import { ReactComponent as Vector } from '../assets/image/header/Vector.svg'
import Button from './Button';
import {useNavigate} from 'react-router-dom'
import { INDEX_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, 
  ABOUT_US_ROUTE, MY_WEDDING_ROUTE, REGISTRATION_PROVIDER_ROUTE, VENDOR_ROUTE } from '../utils/constRoutes';
import { useAppDispatch, useAppSelector } from '../hook';
import { updateIsProvider } from '../store/userSlice';


type ChildProps = {
  avatarProvider?: string;
  avatarUser?: string;
}

const Header: React.FC<ChildProps> = ({avatarProvider, avatarUser}) => {
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const Enable = useAppSelector(state => state.userInfo.isProvider)


  if(Enable){
    return (<div className={styles.header}>
      <img src={nameProduct} className={styles.nameProduct} alt='Ceremonic' width={112} height={23} 
      onClick={() => navigate(INDEX_PAGE_ROUTE, {replace: true})}></img>

      <div className={styles.center}>
        <Button kind='button_primary' onClick={() => navigate(VENDOR_ROUTE, {replace: true})}>Ваша сторінка</Button>
        <Button kind='button_primary'>Месенджер</Button>
        <Button kind='button_primary'>Усі постачальники</Button>
        <Button kind='button_primary' onClick={() => navigate(ABOUT_US_ROUTE, {replace: true})}>Про нас</Button>
      </div>

      <div className={styles.isProvider}>
        <div className={styles.imageContainer}>
          {avatarProvider &&
            <img src={`${import.meta.env.VITE_AVATAR_ROUTE}${avatarProvider}`} alt="Avatar" style={{ width: '100%', height: 'auto' }} />}
        </div>
        <Button kind='button_primary' onClick={() => {
          localStorage.removeItem('jwtString')
          dispatch(updateIsProvider(false))
          navigate(INDEX_PAGE_ROUTE, {replace: true})}}>Вийти</Button>
      </div>
    </div>)
  }

  return (
    <div className={styles.header}>
      <img src={nameProduct} className={styles.nameProduct} alt='Ceremonic' width={112} height={23} 
      onClick={() => navigate(INDEX_PAGE_ROUTE, {replace: true})}></img>
      <div className={styles.center}>
        <Button kind='button_primary' onClick={() => navigate(MY_WEDDING_ROUTE, {replace: true})}>Планування</Button>
        <Button kind='button_primary'>Місця</Button>
        <Button kind='button_primary'>Послуги</Button>
        <Button kind='button_primary'>Статті</Button>
        <Button kind='button_primary'>Тест</Button>
        <Button kind='button_primary' onClick={() => navigate(ABOUT_US_ROUTE, {replace: true})}>Про нас</Button>
      </div>
      <div className={styles.auth}>
        <div className={styles.supplier} onClick={() => navigate(REGISTRATION_PROVIDER_ROUTE, {replace: true})}>
          <Vector className={styles.vector} /> &nbsp; Надаєте послуги?
        </div>&nbsp;
        <Button kind='button_secondary' onClick={() => navigate(LOGIN_ROUTE, {replace: true})}>Увійти</Button>
        <Button kind='button_secondary' onClick={() => navigate(REGISTRATION_ROUTE, {replace: true})}>Зареєструватися</Button>

      </div>
    </div>
  )
}

export default Header;
