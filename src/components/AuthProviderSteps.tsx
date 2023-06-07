import { ChangeEvent, useEffect, useState } from 'react';
import styles from './css/authProviderSteps.module.css'

import MyGoogleLogin from './MyGoogleLogin';
import Input from './Input';
import MySelect from './MySelect';

import { useAppDispatch, useAppSelector } from '../hook';
import { addProvider } from '../store/authProviderSlice';
import Button from './Button';

type ChildProps = {
    currentStep: number;
    setCurrentStep?: (step: number) => void;
    isChecked: boolean;
    setIsChecked: (check: boolean) => void;
}

const AuthProviderSteps: React.FC<ChildProps> = ({currentStep, setCurrentStep, isChecked, setIsChecked}) => {

    const dispatch = useAppDispatch()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const [brandName, setBrandName] = useState<string>('')
    
    const serviceName: string = ''
    const tokenID: string = ''

    const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')

    const [isValidPassword, setIsValidPassword] = useState<boolean>(false)
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')

    const currentService = useAppSelector(state => state.authProviderInfo.authProvider.serviceName)
    const [isValidService, setIsValidService] = useState<boolean>(false)

    useEffect(() => {
        if(currentStep === 3){
            dispatch(addProvider({firstName, lastName, email, password, brandName, serviceName, tokenID}))
        }

        if(currentService !== ''){
            setIsValidService(true)
        } else {
            setIsValidService(false)
        }  
    }, [currentStep, currentService]);


    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u
        const ValidEmail = emailRegex.test(email)
        const isMax: boolean = email.length <= 50

        if (ValidEmail && isMax) {
            setIsValidEmail(true)
            setErrorMessageEmail('')
        } else if (!isMax) {
            setIsValidEmail(false)
            setErrorMessageEmail(import.meta.env.VITE_VALIDATION_EMAIL_MAX)
        } else {
            setIsValidEmail(false)
            setErrorMessageEmail(import.meta.env.VITE_VALIDATION_EMAIL_PATTERN)
        }
    }
    
      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newEmail: string = e.target.value
        setEmail(newEmail)
        validateEmail(newEmail)
    }

    const validatePassword = (password: string) => {
        const emailRegex = /^[^!"№;%:?*()_+\-=@#$%^&'`\\|/.,\sа-яА-Я]+$/u
        const ValidPassword = emailRegex.test(password)
        setIsValidPassword(ValidPassword)
        const isMax: boolean = password.length <= 50
        const isMin: boolean = password.length >= 6

        if (ValidPassword && isMax && isMin) {
            setIsValidPassword(true)
            setErrorMessagePassword('')
        } else if (!isMax) {
            setIsValidPassword(false)
            setErrorMessagePassword(import.meta.env.VITE_VALIDATION_PASSWORD_MAX)
        } else if (!isMin) {
            setIsValidPassword(false)
            setErrorMessagePassword(import.meta.env.VITE_VALIDATION_PASSWORD_MIN)
        }else {
            setIsValidPassword(false)
            setErrorMessagePassword(import.meta.env.VITE_VALIDATION_PASSWORD_PATTERN)
        }
    }
    
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword: string = e.target.value
        setPassword(newPassword)
        validatePassword(newPassword)
    }

    if(currentStep === 1)
    {
        return (
            <>
                <div className={styles.authProviderStepsOne}>
                    <MyGoogleLogin setCurrentStep={setCurrentStep}/>
            
                    <p className={styles.text}>
                        або
                    </p>
            
                    <p className={styles.text_two}>
                        введіть електронну пошту та пароль
                    </p>
            
                    <div className={styles.inputs_one}>
                        <Input kind='input_without-border' type='email' placeholder='Email'
                            value={email}
                            onChange={e => handleEmailChange(e)}/>
                        {!isValidEmail && <p style={{ color: 'red' }}>{errorMessageEmail}</p>}
                        <Input kind='input_without-border' type='password' placeholder='Пароль'
                            value={password}
                            onChange={e => handlePasswordChange(e)}/>
                        {!isValidPassword && <p style={{ color: 'red' }}>{errorMessagePassword}</p>}
                    </div>
            
                </div>
                <Button kind='button_with-shadow' color='#000000' width='208px' 
                height='36px' borderRadius='5px'
                fontSize='16px' fontWeight={500} lineHeight='20px' disabled={!(isValidEmail && isValidPassword)}
                onClick={() => {
                    if(currentStep === 1){ 
                        if(typeof setCurrentStep === 'function') 
                            setCurrentStep(2)
                    }}}>
                    Далі
                </Button>
            </>
        );
    }else if(currentStep === 2){
        return (
            <>
                <div className={styles.authProviderStepsTwo}>
                    <p>
                        Введіть ваше ім’я та прізвище.
                    </p>

                    <div className={styles.inputs_two}>
                        <Input kind='input_without-border' placeholder='Iм’я' maxWidth='103px'
                            value={firstName} margin='0px 25px 0px 0px'
                            onChange={e => setFirstName(e.target.value)}/>

                        <Input kind='input_without-border' placeholder='Прізвище' width='227px'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}/>
                    </div>

                    <p>
                        Які послуги ви надаєте?
                    </p>
                    <MySelect />

                    <p>
                        Введіть назву вашого бренду.
                    </p>
                    <Input kind='input_without-border' placeholder='Назва'
                        value={brandName}
                        onChange={e => setBrandName(e.target.value)}/>

                    <div className={styles.checkbox_brand}>
                        <input type="checkbox" id="brand" className={styles.check_brand}/>
                        <label htmlFor="brand">
                            Використовувати ім’я та прізвище замість назви
                        </label>
                    </div>

                    <p>
                        Ця назва є вашим брендом. Вона буде заголовком на вашій сторінці.
                    </p>

                </div>
                <Button kind='button_with-shadow' color='#000000' width='208px' 
                height='36px' borderRadius='5px'
                fontSize='16px' fontWeight={500} lineHeight='20px' disabled={!(isValidService)}
                onClick={() => {
                    if(currentStep === 2){ 
                        if(typeof setCurrentStep === 'function') 
                            setCurrentStep(3)
                    }}}>
                    Далі
                </Button>
            </>
        );
    }else{
        return (
            <div className={styles.authProviderStepsOther}>
                <p>
                    КОДЕКС ЧЕСТІ ПОСТАЧАЛЬНИКА
                </p>
                <div className={styles.border_dot}>
                    <p>Я приймаю <span className={styles.color_blue}>відповідальність</span> за себе та за те, що відбувається навколо.</p>

                    <p>Я <span className={styles.color_blue}>чесний</span> із собою та клієнтами.</p>

                    <p>Я <span className={styles.color_blue}>поважаю</span> колег, що використовують веб-систему.</p>

                    <p>Я хочу <span className={styles.color_blue}>дивувати та радувати клієнтів</span> якістю послуг та моїм ставленням.</p>

                    <p>Я <span className={styles.color_blue}>обіцяю</span> тільки тоді, коли впевнений, що я 
                    <span className={styles.color_blue}> зможу</span> надати послугу.</p>

                </div>

                <div className={styles.check_codex}>
                    <input type="checkbox" onClick={() => 
                        {if(typeof setIsChecked === 'function'){
                            setIsChecked(!isChecked)}
                        }
                    } 
                        id="codex" className={styles.check}/>
                    <label htmlFor="codex" className={styles.label_check}>
                        Я погоджуюсь з кодексом честі
                    </label>
                </div>

            </div>
        );
    }
}

export default AuthProviderSteps;