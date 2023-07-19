import React from "react";
import styles from "./file-form.module.scss";
import { Button } from "../button";

export const FileForm = () => {
  const hiddenFileInput = React.useRef<any>(null);
  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };
  return (
    <div className={styles.flex}>
      <span>Заповніть форму, ми Вам зателефонуємо</span>
      <h4>Зв’язатись з нами</h4>
      <div className={styles.input}>
        <label>Ім’я та прізвище</label>
        <input type="text" name="" id="" />
      </div>
      <div className={styles.input}>
        <label>Телефон</label>
        <input type="tel" name="" id="" />
      </div>
      <div className={styles.input}>
        <label>Email</label>
        <input type="email" name="" id="" />
      </div>
      <div className={styles.input}>
        <label>Коментар</label>
        <textarea name="" id="" cols={30} rows={1} />
        <span onClick={handleClick}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1066 5.39351C24.3729 2.65984 19.9408 2.65984 17.2071 5.39351L13.6716 8.92905C13.2811 9.31957 13.2811 9.95274 13.6716 10.3433C14.0621 10.7338 14.6953 10.7338 15.0858 10.3433L18.6213 6.80773C20.574 4.85511 23.7398 4.85511 25.6924 6.80773C27.645 8.76035 27.645 11.9262 25.6924 13.8788L22.1569 17.4143C21.7663 17.8049 21.7663 18.438 22.1569 18.8285C22.5474 19.2191 23.1806 19.2191 23.5711 18.8285L27.1066 15.293C29.8403 12.5593 29.8403 8.12718 27.1066 5.39351Z"
              fill="#4B4B4B"
            />
            <path
              d="M10.8432 14.5859C11.2337 14.1954 11.2337 13.5622 10.8432 13.1717C10.4526 12.7812 9.81947 12.7812 9.42894 13.1717L5.89341 16.7072C3.15974 19.4409 3.15974 23.873 5.89341 26.6067C8.62708 29.3404 13.0592 29.3404 15.7929 26.6067L19.3284 23.0712C19.719 22.6807 19.719 22.0475 19.3284 21.657C18.9379 21.2664 18.3047 21.2664 17.9142 21.657L14.3787 25.1925C12.4261 27.1451 9.26024 27.1451 7.30762 25.1925C5.355 23.2399 5.355 20.0741 7.30762 18.1214L10.8432 14.5859Z"
              fill="#4B4B4B"
            />
            <path
              d="M20.7426 13.1717C21.1332 12.7812 21.1332 12.148 20.7426 11.7575C20.3521 11.3669 19.7189 11.3669 19.3284 11.7575L12.2574 18.8285C11.8668 19.2191 11.8668 19.8522 12.2574 20.2428C12.6479 20.6333 13.281 20.6333 13.6716 20.2428L20.7426 13.1717Z"
              fill="#4B4B4B"
            />
          </svg>

          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </span>
      </div>
      <Button text="Зв’язатись з нами" onClick={() => console.log("send")} />
    </div>
  );
};