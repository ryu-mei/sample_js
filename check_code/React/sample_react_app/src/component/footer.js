import style from "../styles/footer.module.css"

export default function Footer() {
    const isBlue = true;

    return (
        <div className={ isBlue ? style.footerColorBlue : style.footerColorGreen }>footer</div>
    )
}