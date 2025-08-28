import Nav from './Nav'

function Header ({title}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <img src="../../public/mini Empowerely" alt="Empowerely Logo" className="logo" />
            <Nav />
        </header>
    )
}

export default Header;
