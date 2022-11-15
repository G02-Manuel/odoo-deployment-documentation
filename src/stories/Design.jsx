import React from 'react';
import PropTypes from 'prop-types';
import './Design.css'
import './header.css';

export const Tittle = ({ Tittle, Code }) => (
    <h2>{Tittle} <img src={Code} alt="code" /></h2>
);

export const TittleOdoo = ({ Tittle, Code }) => (
    <h2>{Tittle} <img style={{ width: 100, height: 100 }} src={Code} /></h2>
);

export const Text = ({ Name }) => (
    <p>
        {Name}
    </p>
);

export const Body = ({ Tittle }) => (
    <>
        <div>
            <h4>{Tittle}</h4>
        </div>
    </>
);

export const List = ({ Element }) => (
    <>
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

export const SmallImage = ({ bin }) => (
    <>
        <div>
            <div>
                <img style={{ width: 850, height: 150 }} src={bin} />
            </div>
        </div>
    </>
);



Body.propTypes = {
    Tittle: PropTypes.string.isRequired,
}

Body.defaultProps = {
    user: null,
}

List.propTypes = {
    Element: PropTypes.string.isRequired,
}

List.defaultProps = {
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
};

Tittle.defaultProps = {
    user: null,
};

TittleOdoo.propTypes = {
    Tittle: PropTypes.string.isRequired,
};

TittleOdoo.defaultProps = {
    user: null,
};