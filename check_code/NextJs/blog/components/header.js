import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Feader() {
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo BoxOn />
                <Nav />
            </div>
        </header>
    )
}