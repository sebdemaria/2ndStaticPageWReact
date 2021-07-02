import React from 'react'

import logo from './../assets/logo.png'

import './../styles/Header.css'

export const Header = () => {
    return (
        <header className="header">

            <div className="header-content">
                <a href="/">
                    <img className="logo" src={logo} alt="logo"></img>
                </a>

                <div className="register">
                    <button>
                        Registrarme
                    </button>
                </div>
            </div>

            <hr class="separator" />

        </header>
    )
}
