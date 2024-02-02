"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">Movies Informations</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <Link className={pathName === '/' ? "nav-link active" : "nav-link"} href="/">Home</Link>
                    <Link className={pathName === '/Movies' ? "nav-link active" : "nav-link"}  href="/Movies">Movies</Link>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;