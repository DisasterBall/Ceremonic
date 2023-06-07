import { useEffect, useState } from 'react';
import './css/auth.css';
import '../components/css/input.css'

import {useLocation, useNavigate} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MY_WEDDING_SURVEY_ROUTE} from "../utils/constRoutes";

import MyGoogleLogin from '../components/MyGoogleLogin';
import { userRegistration, userLogin } from '../http/userAPI';
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '../components/Button';


interface UserRegistration {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    emailLogin: string,
    passwordLogin: string,
}

const Auth: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<UserRegistration>({
        mode: 'onChange',
    })

    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const onSubmit: SubmitHandler<UserRegistration> = async (data) => {
        try {
            let info
            if (isLogin) {
                info = await userLogin(data.emailLogin, data.passwordLogin)
            } else {
                info = await userRegistration(data.firstName, data.lastName, data.email, data.password)
            }
            // user.setUser(data)
            // user.setIsAuth(true)
            navigate(MY_WEDDING_SURVEY_ROUTE, {replace: true})
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }

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
                    
                    <form className="auth__registration-inputs" onSubmit={handleSubmit(onSubmit)}>
                        <input className='input_without-border' placeholder='Ваше ім’я'
                            {...register('firstName', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 30,
                                    message: import.meta.env.VITE_VALIDATION_FIRSTNAME_MAX
                                },
                                minLength: {
                                    value: 2,
                                    message: import.meta.env.VITE_VALIDATION_FIRSTNAME_MIN
                                }
                            })}/>
                            {errors?.firstName && (<p style={{color: 'red'}}>{errors.firstName.message}</p>)}

                        <input className='input_without-border' placeholder='Ваше прізвище'
                            {...register('lastName', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 30,
                                    message: import.meta.env.VITE_VALIDATION_LASTNAME_MAX
                                },
                                minLength: {
                                    value: 2,
                                    message: import.meta.env.VITE_VALIDATION_LASTNAME_MIN
                                }
                            })}/>
                            {errors?.lastName && (<p style={{color: 'red'}}>{errors.lastName.message}</p>)}

                        <input className='input_without-border' type='email' placeholder='Email'
                            {...register('email', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 50,
                                    message: import.meta.env.VITE_VALIDATION_EMAIL_MAX
                                }, 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
                                    message: import.meta.env.VITE_VALIDATION_EMAIL_PATTERN
                                }
                            })}/>
                            {errors?.email && (<p style={{color: 'red'}}>{errors.email.message}</p>)}

                        <input className='input_without-border' type='password' placeholder='Пароль'
                            {...register('password', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 30,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_MAX
                                },
                                minLength: {
                                    value: 6,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_MIN
                                },
                                pattern: {
                                    value: /^[^!"№;%:?*()_+\-=@#$%^&'`\\|/.,\sа-яА-Я]+$/u,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_PATTERN
                                }
                            })}/>
                            {errors?.password && (<p style={{color: 'red'}}>{errors.password.message}</p>)}
                            
                        <div className='button_wrapper'>
                            <Button kind='button_with-shadow' width='208px'
                                height='36px' borderRadius='5px'
                                fontSize='16px' fontWeight={500} lineHeight='20px'
                                disabled={!isValid} type='submit'>
                                Зареєструватися
                            </Button>
                        </div>
                        
                    </form>

                    <div className='auth__login-button'>
                        <span className='auth__question'>Вже є акаунт?</span>
                        <Button kind='button_secondary' onClick={() => navigate(LOGIN_ROUTE, {replace: true})}>Увійдіть</Button>
                    </div>

                    {/* <p style={{fontWeight: 300, fontSize: '12px', lineHeight: '15px', color: '#79747E'}}>
                        Ви постачальник?
                    </p> */}
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
                    <form className="auth__registration-inputs auth__registration-inputs-login" onSubmit={handleSubmit(onSubmit)}>
                        <input className='input_without-border' type='email' placeholder='Email'
                            {...register('emailLogin', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 50,
                                    message: import.meta.env.VITE_VALIDATION_EMAIL_MAX
                                }, 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
                                    message: import.meta.env.VITE_VALIDATION_EMAIL_PATTERN
                                }
                            })}/>
                            {errors?.emailLogin && (<div style={{color: 'red'}}>{errors.emailLogin.message}</div>)}
                            
                        <input className='input_without-border' type='password' placeholder='Пароль'
                            {...register('passwordLogin', {
                                required: import.meta.env.VITE_VALIDATION_REQUIRED,
                                maxLength: {
                                    value: 30,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_MAX
                                },
                                minLength: {
                                    value: 6,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_MIN
                                },
                                pattern: {
                                    value: /^[^!"№;%:?*()_+\-=@#$%^&'`\\|/.,\sа-яА-Я]+$/u,
                                    message: import.meta.env.VITE_VALIDATION_PASSWORD_PATTERN
                                }
                            })}/>
                            {errors?.passwordLogin && (<div style={{color: 'red'}}>{errors.passwordLogin.message}</div>)}

                        <div className='button_wrapper'>    
                            <Button kind='button_with-shadow' color='#000000' width='208px' height='36px' borderRadius='5px'
                                fontSize='16px' fontWeight={600} lineHeight='20px' disabled={!isValid} type='submit'>
                                Вхід
                            </Button>
                        </div>
                    </form>
                    

                </div>
        }
        </div>
    );
}

export default Auth;