import Footer from "@/components/sheared/Footer";
import NavBar from "@/components/sheared/NavBar";

const layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;