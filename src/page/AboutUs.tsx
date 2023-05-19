import './css/aboutUs.css'
import { ReactComponent as Vector } from '../assets/image/header/Vector.svg'
import Button from '../components/Button';
import logo from '../assets/image/Page_AboutUs/logo.png'
import imgAllAboutUs from '../assets/image/Page_AboutUs/img_allAboutUs.png'
import Budget from '../assets/image/Page_AboutUs/img_aboutUs_Budget.png'
import Board from '../assets/image/Page_AboutUs/img_aboutUs_Board.png'
import Comanda from '../assets/image/Page_AboutUs/comand.png'
import PreLeft1 from '../assets/image/Page_AboutUs/pre-left1.png'
import PreLeft2 from '../assets/image/Page_AboutUs/pre-left2.png'
import PreLeft3 from '../assets/image/Page_AboutUs/pre-left3.png'
import PreRight1 from '../assets/image/Page_AboutUs/pre-right1.png'
import PreRight2 from '../assets/image/Page_AboutUs/pre-right2.png'
import PreRight3 from '../assets/image/Page_AboutUs/pre-right3.png'

import {useNavigate} from "react-router-dom";
import { REGISTRATION_PROVIDER_ROUTE, REGISTRATION_ROUTE, } from "../utils/constRoutes";
import React from 'react';

const AboutUs: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className="aboutUs">

      <div className="nameHello">
        <img src={logo} alt='Ceremonic' width={350} height={70}></img>
        <h1>
          Для тих, хто не знає з чого почати підготовку до весілля
        </h1>

        <div className="parallelepiped">
          <p>Все, що ти маєш знати про Ceremonic</p>
        </div>

      </div>

      <div className="allAboutUs">
        
        <div className='textAbout'>

        <p>Весілля - це великий день, який вимагає належної підготовки.</p> 

        <p>Раніше люди використовували записні книжки, щоб спланувати день або записати завдання, яке треба виконати та банально викреслювали їх з блокноту, зачіску та макіяж нареченій робили родичі вдома, а шукати ресторан для банкету не було потреби, бо весілля було вдома. </p>

        <p>Часи йдуть, і традиції змінюються. Зараз існує безліч спеціалістів, які готові надати свої послуги, щоб допомогти  у створенні святкового дня. А пари планують весілля свідомо, обираючи все: від кольору одягу гостей до кольору серветок на столі. </p>

        <p>Тому нам прийшла ідея, створити систему, яка допоможе спланувати ідеальний день і допоможе парам, які не знають з чого почати.</p>

        </div>

        <img src={imgAllAboutUs} alt='Flowers' width={539} height={223}></img>

      </div>

      <div className="functions parallelepiped">
          <p>Функції Ceremonic</p>
      </div>

      <div className="about-functions">
          <div className="function-left">
            <p>Ceremonic - це планер завдань, які необхідно підготувати до весілля.</p> 


            <p>Використовуйте готовий список від Ceremonic, який проведе вас у світ організації весіль. Будь-яке завдання можна налаштувати під ваші особисті потреби, адже кожне весілля індивідуальне. Або створюйте свої завдання. Завдання, які ви вже виконали, просто викреслюйте зі списка.</p>

            <img src={Budget} alt="Budget" />

            <p>Ceremonic - це пошук вашої ідеальної команди постачальників послуг. </p>

            <p>Різні типи послуг, від майданчиків та ресторанів до флористів та візажистів. Ви можете шукати спеціалістів за датою вільності, що облегшує пошук. Кожен спеціаліст має вою сторінку і готовий спілкуватися з вами через влаштований месенджер. Все, що від вас треба - це залишити заявку на сторінці постачальника. Якщо ви маєте “match” з постачальником, то ваша команда буде видна на вашій сторінці весілля.</p> 

            <p>А також функції розсадки гостей за столи, контроль відвідуваності гостей, пошук кольорової палітри вашого весілля та натхнення.</p>
            
          </div>

          <div className="function-right">
            <img src={Board} alt="Board" />

            <p>Ceremonic - це ведення бюджету та контроль витрат.</p> 


            <p>Записуйте, на що ви витрачаєте кошти, відведені на весілля. За допомогою діаграми витрат ви зможете оцінити витрати та планувати наступні витрати. Можливо десь ви можете дозволити собі відвести більше грошей, а десь треба зекономити.</p> 

            <img src={Comanda} alt="Comanda" />

          </div>

      </div>

      <div className="pre-footer">
            <div className="pre-footer-left">

              <div className="text parallelepiped">
                <p>Скільки це коштує?</p>
              </div>

              <p>
                Користування для тих, хто планує весілля безкоштовно!  Вам більше не треба витрачатися на весільне агенство.  Якщо ви постачальник, то Ceremoniс бере плату помісячно за можливість користуватися сайтом. Перші 6 місяців безкоштовні. 
              </p>

              <div className="images">
                <img src={PreLeft1} alt="PreLeft1" />
                <img src={PreLeft2} alt="PreLeft2" />
                <img src={PreLeft3} alt="PreLeft3" />
              </div>

            </div>

            <div className="pre-footer-right">

              <div className="text parallelepiped">
                <p>Чому Ceremonic?</p>
              </div>
              
              <p>
                Ceremonic - єдиний в Україні планер весілля, який надає найширший спектр функцій, від планування весілля до підбору постачальників послуг. Це зручно, адже все зібрано в одному місці.
              </p>

              <div className="images">
                <img src={PreRight1} alt="PreRight1" />
                <img src={PreRight2} alt="PreRight2" />
                <img src={PreRight3} alt="PreRight3" />
              </div>

            </div>

          </div>

          <div className="motivation">
            <p>Швиденько реєструйся та спробуй можливості Ceremonic! </p>
            <Button kind='button_secondary' onClick={() => navigate(REGISTRATION_ROUTE, {replace: true})}>Зареєструватися</Button>
            <div className='supp' onClick={() => navigate(REGISTRATION_PROVIDER_ROUTE, {replace: true})}>
              <Vector className='vec' /> &nbsp;&nbsp; Надаєте послуги?
            </div>
          </div>

    </div>
  );
}

export default AboutUs;
