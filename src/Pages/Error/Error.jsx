import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error__container}>
        <h1 className={styles.heading}>Ошибка 404</h1>
        <p className={styles.message}>Запрошенная страница не найдена</p>
        <div className={styles.img}>< /div>
      </div>
      <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#80004d" fillOpacity="1"
              d="M0,96L18.5,96C36.9,96,74,96,111,112C147.7,128,185,160,222,181.3C258.5,203,295,213,332,218.7C369.2,224,406,224,443,192C480,160,517,96,554,101.3C590.8,107,628,181,665,186.7C701.5,192,738,128,775,85.3C812.3,43,849,21,886,21.3C923.1,21,960,43,997,69.3C1033.8,96,1071,128,1108,160C1144.6,192,1182,224,1218,234.7C1255.4,245,1292,235,1329,208C1366.2,181,1403,139,1422,117.3L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Error;