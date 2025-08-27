import 'Link.scss'
function Link ({ href, children }) {
    return (
        <a href={href} className="custom-link">
            {children}  
        </a>
    );
}

export default Link;