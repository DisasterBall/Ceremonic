import { useEffect, useState } from 'react';
import './css/auth.css';

import {useLocation, useNavigate} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MY_WEDDING_SURVEY_ROUTE} from "../utils/constRoutes";

import MyGoogleLogin from '../components/MyGoogleLogin';
import { userRegistration, userLogin } from '../http/userAPI';

import Input from '../components/Input';
import Button from '../components/Button';

const Auth: React.FC = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await userLogin(email, password);
            } else {
                data = await userRegistration(firstName, lastName, email, password);
            }
            // user.setUser(data)
            // user.setIsAuth(true)
            navigate(MY_WEDDING_SURVEY_ROUTE, {replace: true})
        } catch (e: any) {
            alert(e.response.data.message)
        }

    }

    useEffect(() => {

    }, [])

    return(
        <div className='auth'>
            {!isLogin ?
                <div className="auth__registration">
                    <p className='auth__caption'>
                        Реєстрація
                    </p>

                    <MyGoogleLogin/>

                    <p className='auth__text-pre'>
                        Або за допомогою пошти
                    </p>
                    
                    <div className="auth__registration-inputs">
                        <Input kind='input_without-border' placeholder='Ваше ім’я'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}/>
                        <Input kind='input_without-border' placeholder='Ваше прізвище'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}/>
                        <Input kind='input_without-border' type='email' placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                        <Input kind='input_without-border' type='password' placeholder='Пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <Button kind='button_with-shadow' color='#000000' width='208px' 
                    height='36px' borderRadius='5px'
                    fontSize='16px' fontWeight={500} lineHeight='20px'
                    onClick={click}>
                        Зареєструватися
                    </Button>
                    
                    <div className='auth__login-button'>
                        <span className='auth__question'>Вже є акаунт?</span>
                        <Button kind='button_secondary' onClick={() => navigate(LOGIN_ROUTE, {replace: true})}>Увійдіть</Button>
                    </div>

                    <p style={{fontWeight: 300, fontSize: '12px', lineHeight: '15px', color: '#79747E'}}>
                        Ви постачальник?
                    </p>
                </div>
            :
                <div className="auth__registration">
                    <p className='auth__caption'>
                        Вхід
                    </p>
                    <div className='auth__registration-button'>
                        <span className='auth__question auth__question-login'>Ще не зареєстровані?</span>
                        <Button kind='button_secondary' onClick={() => navigate(REGISTRATION_ROUTE, {replace: true})}>
                            Зареєструйтеся зараз</Button>
                    </div>

                    <MyGoogleLogin/>

                    <p className='auth__text-pre auth__text-pre-login'>
                        Або за допомогою пошти
                    </p>
                    <div className="auth__registration-inputs auth__registration-inputs-login">
                        <Input kind='input_without-border' type='email' placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                        <Input kind='input_without-border' type='password' placeholder='Пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                        
                    </div>
                    <Button kind='button_with-shadow' color='#000000' width='208px' height='36px' borderRadius='5px'
                    fontSize='16px' fontWeight={600} lineHeight='20px'
                    onClick={click}>
                        Вхід
                    </Button>

                </div>
        }
        </div>
    );
}

export default Auth;