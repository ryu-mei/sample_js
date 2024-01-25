import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({children}) {
    return (
        <>
            <Header />
                <main style={{color: "red"}}>{children}</main>
            <Footer />
        </>
    )
}