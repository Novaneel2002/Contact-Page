import styles from "./Navigation.module.css";


const Navigation = () => {
    
    return (
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="./images/logo.png" alt="logo_image" />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>

    )

}

export default Navigation;