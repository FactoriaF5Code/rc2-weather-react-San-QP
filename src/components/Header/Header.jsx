import "./Header.css";

export const Header = ( ) => {
    
    return(
    <>
        <header className="headerPage">
            <img src="../../../public/mosaic/mosaic1-left.svg" alt="decoration header" className="mosaic"/>
            <div className="headerContainer">
                <h1 className="logo" >
                    <span style={{ color: '#FF4F1D' }}>I</span>
                    <span style={{ color: '#3C65B4' }}>R</span>
                    <span style={{ color: '#E386B6' }}>I</span>
                    <span style={{ color: '#F9CA08' }}>S </span>
                    Weather
                </h1>
                <p className="description">The colorful weather APP</p>
            </div>
            <img src="mosaic/mosaic1-right.svg" alt="decoration header" className="mosaic"/>
        </header>
    </>
    )
};
