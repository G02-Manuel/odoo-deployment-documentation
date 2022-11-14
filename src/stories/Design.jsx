import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

export const Tittle = ({ Tittle, Code }) => (
    <h2>{Tittle} <img src={Code} alt="code" /></h2>
);

export const Text = ({ Name }) => (
    <p>
        {Name}
    </p>
);

export const Body = ({ Tittle, Element }) => (
    <>
        <div>
            <h4>{Tittle}</h4>
        </div>
        <div className='inside-code-1'>
            <ul className='code-class'>
                <li>
                    {Element}
                </li>
            </ul>
        </div>
    </>
);

export const Image = ({ bin }) => (
    <>
        <div>
            <div>
                <img style={{ width: 850, height: 650 }} src={bin} />
            </div>
        </div>
    </>
);

export const ImageShoot = ({ bin }) => (
    <>
        <div>
            <div>
                <img style={{ width: 700, height: 300 }} src={bin} />
            </div>
        </div>
    </>
);

Body.propTypes = {
    Tittle: PropTypes.string.isRequired,
    Element: PropTypes.string.isRequired,
}

Body.defaultProps = {
    user: null,
}

Text.propTypes = {
    Name: PropTypes.string.isRequired,
}

Text.defaultProps = {
    user: null,
}

Tittle.propTypes = {
    Tittle: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
};

Tittle.defaultProps = {
    user: null,
};