import styles from "./Contactform.module.css";
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi"
import { useState } from "react";
// import { useState } from "react";

const Contactform = () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [text, setText] = useState(" ");

    // let name = " ";
    // let email = " ";
    // let text = " ";


    const Onpress = (text) => {
        console.log(`Hey from ${text}`);
    }


    const Onsubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);




        document.getElementById('myForm').reset();
    }

    return (
        <section className={styles.container}>
            <div className={styles.contactform}>

                <div className={styles.top_btn}>
                    <Button onClick={() => Onpress("CHAT")} text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px" />} />
                    <Button onClick={() => Onpress("CALL")} text='VIA CALL' icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button onClick={() => Onpress("EMAIL")} isOutline={true} text='VIA EMAIL FORM' icon={<HiMail fontSize="24px" />} />

                <form id="myForm" onSubmit={Onsubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "end" }}>

                        <Button text='SUBMIT' />
                    </div>
                    <div>
                        <h1>Your Submission: </h1>
                        {"Name: " + name + " "}
                        <br />
                        {"Email: " + email + " "}
                        <br />
                        {"Text: " + text + " "}
                    </div>

                </form>

            </div>
            <div className={styles.contactImage}>
                <img src="/images/contact.svg" alt="Contact_Image" />
            </div>
        </section>

    )
}


export default Contactform;