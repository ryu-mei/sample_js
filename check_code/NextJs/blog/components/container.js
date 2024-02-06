import styles from 'styles/container.module.css';

export default function Container({childlen}) {
    return (
        <div className={styles.default}>
            {childlen}
        </div>
    )
}