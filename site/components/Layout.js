import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children}) =>{

    return(
        <>
        <Header/>
        <div className="container px-5 py-8 mx-auto ">{children}</div>
        
        <Footer/>
        </>
    )
}
export default Layout