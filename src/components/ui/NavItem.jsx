import { Link } from "react-router-dom";

const NavItem = ({ link, activeSection, className }) => {
    const isActive = activeSection === link.href.replace(/^\/|^#/, "");

    const baseClasses = `uppercase text-base p-2 transition-colors
    ${isActive ? "bg-highlight border-2 border-dark" : "hover:text-primary"} ${className}`;

    if (link.href.startsWith("/")) {
        return (
            <Link key={link.name} to={link.href} className={baseClasses}>
                {link.name}
            </Link>
        );
    }

    return (
        <a key={link.name} href={link.href} className={baseClasses}>
            {link.name}
        </a>
    );
}

export default NavItem