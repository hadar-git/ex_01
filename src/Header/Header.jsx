import myImage from './img.png'
const Header = () => {
    return (
        <div>
        <h1 className="header-title">הגינה שלי</h1>
        <img src={myImage} alt="Header" width="100" />
    </div>
    )
}

export default Header