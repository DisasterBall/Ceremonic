import { UploadImageUser } from '../components/UploadImageUser';
import styles from './css/myWeddingSurvey.module.css'


const MyWeddingSurvey: React.FC = () => {

  return (
    <div className={styles.myWeddingSurvey}>
        <p className={styles.caption}>Основна інформація про ваше весілля</p>

        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.text_input}>
                    <p>
                        Як вас звати?
                    </p>
                    <input className={styles.input} type="text" placeholder='Ввести ім’я'/>
                </div>

                <p>
                    Завантажте вашу фотографію
                </p>
                <UploadImageUser />
            </div>

            <div className={styles.right}>
                <div className={styles.text_input}>
                    <p>
                        Як звати вашого партнера?
                    </p>
                    <input className={styles.input} type="text" placeholder='Ввести ім’я'/>
                </div>

                <p>
                    Завантажте фотографію партнера
                </p>
                <UploadImageUser />
            </div>
        </div>

        <p>
            На яку дату заплановано весілля?
        </p>
        
    </div>
  );
}

export default MyWeddingSurvey