import Header from "./Header";

const Layout = ({ children}) => {
    return (
        <div className="min-h-screen w-screen bg-blue-300">
        <Header/>
        <div className="p-3">
            {children}
        </div>
        </div>
    );
}

export default Layout;