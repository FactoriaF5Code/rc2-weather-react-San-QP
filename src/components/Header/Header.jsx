import "./Header.css";

export const Header = ( ) => {
    
    return(
    <>
        <header className="headerPage">
            <div className="headerContainer">
                <h1 className="logo"> I
                    <span style={{ color: '#FF4F1D' }}>R</span>
                    <span style={{ color: '#3C65B4' }}>I</span>
                    <span style={{ color: '#F9CA08' }}>S </span>
                    Weather
                </h1>
                <p className="description">The colorful weather APP</p>
            </div>
        </header>
    </>
    )
};
