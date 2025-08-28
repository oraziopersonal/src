import Nav from './Nav'

function Header (props) {
    return (
        <header className="header">
            <h1>Empowerely</h1>
            <img src="../../public/mini Empowerely" alt="Empowerely Logo" className="logo" />
            <Nav />
        </header>
    )
}

export default Header;
