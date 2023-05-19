import { useEffect, useState } from 'react';
import styles from './css/authProviderSteps.module.css'

import MyGoogleLogin from './MyGoogleLogin';
import Input from './Input';
import MySelect from './MySelect';

import { useAppDispatch, useAppSelector } from '../hook';
import { addProvider } from '../store/authProviderSlice';

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

    useEffect(() => {
        if(currentStep === 3){
            dispatch(addProvider({firstName, lastName, email, password, brandName, serviceName, tokenID}))
        }    
    }, [currentStep]);


    if(currentStep === 1)
    {
        return (
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
                      onChange={e => setEmail(e.target.value)}/>
                  <Input kind='input_without-border' type='password' placeholder='Пароль'
                      value={password}
                      onChange={e => setPassword(e.target.value)}/>
              </div>
      
          </div>
        );
    }else if(currentStep === 2){
        return (
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