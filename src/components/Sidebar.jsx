import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "200px"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">PostHub</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white" exact activeClassName="active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#home"></use>
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-post" className="nav-link text-white" activeClassName="active">
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                            Create Post
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://images-platform.99static.com//bABwyPaSlYVZW-E95OkdmD00XZY=/221x221:780x781/fit-in/500x500/99designs-contests-attachments/129/129933/attachment_129933858" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Social</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
