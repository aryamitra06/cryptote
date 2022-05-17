import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <p>&copy;{new Date().getFullYear()} cryptote v2.0.0<br></br>Made with ☕ by <a href='https://www.aryamitrachaudhuri.live' target='_blank' rel="noreferrer">Aryamitra Chaudhuri</a></p>
            </div>
        </>
    )
}

export default Footer