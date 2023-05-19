import './css/indexPage.css';

import {useNavigate} from 'react-router-dom'
import { INDEX_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ABOUT_US_ROUTE } from '../utils/constRoutes';

import Button from '../components/Button';
import Input from '../components/Input';
import Lupa from '../assets/image/Page_IndexPage/Lupa.svg'
import Map from '../assets/image/Page_IndexPage/Map.svg'

import figure_1 from '../assets/image/Page_IndexPage/Function_1.svg'
import figure_2 from '../assets/image/Page_IndexPage/Function_2.svg' 
import figure_3 from '../assets/image/Page_IndexPage/Function_3.svg' 
import figure_4 from '../assets/image/Page_IndexPage/Function_4.svg' 
import figure_5 from '../assets/image/Page_IndexPage/Function_5.svg' 
import figure_6 from '../assets/image/Page_IndexPage/Function_6.svg' 
import figure_7 from '../assets/image/Page_IndexPage/Function_7.svg' 

import photo_1 from '../assets/image/Page_IndexPage/photo_1.png'
import photo_2 from '../assets/image/Page_IndexPage/photo_2.png'
import photo_3 from '../assets/image/Page_IndexPage/photo_3.png'
import photo_4 from '../assets/image/Page_IndexPage/photo_4.png'
import photo_5 from '../assets/image/Page_IndexPage/photo_5.png'
import photo_6 from '../assets/image/Page_IndexPage/photo_6.png'
import photo_7 from '../assets/image/Page_IndexPage/photo_7.png'
import photo_8 from '../assets/image/Page_IndexPage/photo_8.png'
import photo_9 from '../assets/image/Page_IndexPage/photo_9.png'
import photo_10 from '../assets/image/Page_IndexPage/photo_10.png'
import photo_11 from '../assets/image/Page_IndexPage/photo_11.png'

import step_2 from '../assets/image/Page_IndexPage/step_2.png'
import step_3_1 from '../assets/image/Page_IndexPage/step_3_1.png'
import step_3_2 from '../assets/image/Page_IndexPage/step_3_2.png'
import step_4_1 from '../assets/image/Page_IndexPage/step_4_1.png'
import step_4_2 from '../assets/image/Page_IndexPage/step_4_2.png'
import step_5 from '../assets/image/Page_IndexPage/step_5.png'

const IndexPage: React.FC = () => {

    const navigate = useNavigate()

    return(
        <div className="index-page">
            <div className="search">
                <div className="search-text">
                    <p className="search-text-first">
                        Шукаєш ідеальне місце проведення церемонії для свого весілля або послугу? 
                    </p>

                    <p className='search-text-second'>
                        Спеціалісти зі всієї України зібралися тут, щоб зробити ваше весілля незабутнім.
                    </p>

                    <div className="buttons-search">
                        <div className="buttons-search__what">
                            <img src={Lupa} alt="Lupa" />
                            <Input kind='input_primary' padding='8px 0px 8px 34px' borderRadius='4px 0px 0px 4px' placeholder='Що шукати' boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'/>
                        </div>
                        <div className="buttons-search__where">
                            <img src={Map} alt="Map" />
                            <Input kind='input_primary' padding='8px 34px 8px 12px' placeholder='Де' 
                            boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'/>
                        </div>
                        <Button kind='button_with-shadow' color='white' width='100px' borderRadius='0px 4px 4px 0px'>Пошук</Button>
                    </div>

                    <div className="button-services">
                        <p>Не знаєте, що саме шукати?</p>
                        <Button fontSize='10px' fontWeight={400} lineHeight='12px' kind='button_secondary'>Подивитися усі послуги</Button>
                    </div>

                </div>
            </div>

            <div className="function-ceremonic">

                <div className="function-ceremonic__tools">
                    <p>Легко розплануйте своє весілля</p>
                    <Button kind='button_secondary' fontWeight={600} fontSize='14px' lineHeight='17px'>Розпочати планування </Button>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_1} alt="figure_1" width={51} height={51} />
                    <p>Керуйте гостями</p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_2} alt="figure_2" width={49} height={49} />
                    <p>Відстежуйте прогресу планері</p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_3} alt="figure_3" width={42} height={42} />
                    <p>Шукайте постачальників</p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_4} alt="figure_4" width={51} height={51} />
                    <p>Створюйте план весілля</p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_5} alt="figure_5" width={53} height={53} />
                    <p>Керуйте весільним бюджетом </p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_6} alt="figure_6" width={50} height={50} />
                    <p>Інформуйте гостей поштою</p>
                </div>

                <div className="function-ceremonic__tools function-ceremonic__icon">
                    <img src={figure_7} alt="figure_7" width={50} height={50} />
                    <p>Спілкуйтеся з постачальниками</p>
                </div>

            </div>

            <div className="pre-steps-road">
                Як використовувати <Button kind='button_secondary' fontWeight={600} fontSize='16px' lineHeight='20px'>Ceremonic</Button>?
            </div>

            <div className="steps-road">

                <div className="steps-road-step steps-road-step__step-1">
                    <p className="steps-road-step__caption">
                        Крок 1
                    </p>
                    <div className="steps-road-step__step-1_buttons">
                        Зареєструйтеся в системі
                        <Button kind='button_with-shadow' width='144px' onClick={() => navigate(REGISTRATION_ROUTE, {replace: true})}
                        lineHeight='20px' borderRadius='4px'>Зареєструватися</Button>
                        Або увійдіть
                        <Button kind='button_with-shadow' width='100px' onClick={() => navigate(LOGIN_ROUTE, {replace: true})}
                        lineHeight='20px' borderRadius='4px'>Увійти</Button>
                    </div>
                </div>

                <div className="steps-road-step steps-road-step__step-2" >
                    <p className="steps-road-step__caption">
                        Крок 2
                    </p>

                    Додайте інформацію про весілля

                    <div className="steps-road-step__step-2_img">
                        <img src={step_2} alt="step_2" width={191} height={92}/>
                    </div>
                </div>

                <div className="steps-road-step steps-road-step__step-3">
                    <p className="steps-road-step__caption">
                        Крок 3
                    </p>
                    Контролюйте прогрес <br />
                    &nbsp; підготовки до весілля
                        <div className="steps-road-step__step-3_img_1">
                            <img src={step_3_1} alt="step_3_1" width={226} height={94}/>
                        </div>
                        <div className="steps-road-step__step-3_img_2">
                            <img src={step_3_2} alt="step_3_2" width={193} height={106}/>
                        </div>
                </div>

                <div className="steps-road-step steps-road-step__step-4">
                    <p className="steps-road-step__caption">
                        Крок 4
                    </p>
                    Управляйте своїм бюджетом і <br />
                    формуйте список гостей
                    <div className="steps-road-step__step-4_img_1">
                        <img src={step_4_1} alt="step_4_1" width={181} height={118}/>
                    </div>
                    <div className="steps-road-step__step-4_img_2">
                        <img src={step_4_2} alt="step_4_2" width={130} height={59}/>
                    </div>
                </div>

                <div className="steps-road-step steps-road-step__step-5">
                    <p className="steps-road-step__caption">
                        Крок 5
                    </p>
                    Знаходьте постачальників <br />
                    послуг та взаємодійте з ними у <br />
                    месенджері
                    <div className="steps-road-step__step-5_img">
                        <img src={step_5} alt="step_5" width={193} height={162}/>
                    </div>
                </div>

            </div>
            
            <div className="step-6">
                <p className='step-6__p'>Крок 6 </p>
                Той момент, коли все підготовлено,<br /> 
                залишилося тільки прийти!
                <div className="step-6__img">
                    <img src={photo_1} alt="photo_1" width={100} height={130} />
                    <img src={photo_2} alt="photo_2" width={100} height={130} />
                    <img src={photo_3} alt="photo_3" width={100} height={130} />
                    <img src={photo_4} alt="photo_4" width={100} height={130} />
                    <img src={photo_5} alt="photo_5" width={100} height={130} />
                    <img src={photo_6} alt="photo_6" width={100} height={130} />
                    <img src={photo_7} alt="photo_7" width={100} height={130} />
                    <img src={photo_8} alt="photo_8" width={100} height={130} />
                    <img src={photo_9} alt="photo_9" width={100} height={130} />
                    <img src={photo_10} alt="photo_10" width={100} height={130} />
                    <img src={photo_11} alt="photo_11" width={100} height={130} />
                </div>  
            </div>

            <div className="index-page__pre-footer">
                <p className="index-page__pre-footer-caption">
                    Що цікавого є у Ceremonic?
                </p>
                <div className="index-page__pre-footer-wrapper">
                    <div className="index-page__pre-footer_function">
                        <span className='index-page__pre-footer_numbers'>
                            1
                        </span>
                        <p className='index-page__pre-footer_text-first'>
                            Автоматичний пошук послуг
                        </p>
                            <p className='index-page__pre-footer_main-text'>
                                При внесенні інформації про ваше весілля ви також вносите <br />
                                обмеження, які Ceremonic враховує та зберігає для подальшого <br />
                                пошука послуг, місць проведення або ресторанів.
                            </p>
                    </div>
                    <div className="index-page__pre-footer_function">
                        <span className='index-page__pre-footer_numbers'>
                            2
                        </span>
                        <p className='index-page__pre-footer_text-first'>
                            Розсилка листів гостям 
                        </p>
                            <p className='index-page__pre-footer_main-text'>
                                В Ceremonic існує окремий вид завдання “Запланувати розсилку <br />
                                листів”. Якщо тобі треба надіслати запрошення або повідомити <br />
                                гостей про щось, використовуй цю функцію.
                            </p>
                    </div>
                    <div className="index-page__pre-footer_function">
                        <span className='index-page__pre-footer_numbers'>
                            3
                        </span>
                        <p className='index-page__pre-footer_text-first'>
                            Тест на колір весілля
                        </p>
                            <p className='index-page__pre-footer_main-text'>
                                Не можете визначитися з кольором весілля? Пройдіть тест від <br />
                                Ceremonic і отримайте свою кольорову палітру для свята.
                            </p>
                    </div>
                    <div className="index-page__pre-footer_function">
                        <span className='index-page__pre-footer_numbers'>
                            4
                        </span>
                        <p className='index-page__pre-footer_text-first'>
                            Нагадування на пошту
                        </p>
                            <p className='index-page__pre-footer_main-text'>
                                За тиждень до спливання сроку виконання завдання <br />
                                вам буде надходити лист з нагадуванням.
                            </p>
                    </div>
                    <div className="index-page__pre-footer_function">
                        <span className='index-page__pre-footer_numbers'>
                            5
                        </span>
                        <p className='index-page__pre-footer_text-first'>
                            Розсадка гостей за столи
                        </p>
                            <p className='index-page__pre-footer_main-text'>
                                Після того, як ви додали усіх гостей в систему, переходьте у <br />
                                редактор “Розсадка гостей” та створіть план.
                            </p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;