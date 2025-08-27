import Nav from './Nav'

function Header () {
    return (
        <header className="header">
            <h1>Empowerely</h1>
            <img src="/logo.png" alt="Empowerely Logo" className="logo" />
            <Nav />
        </header>
    )
}

export default Header;