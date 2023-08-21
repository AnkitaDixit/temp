import React from 'react';

const headerLinks = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact', url: '/contact' },
];

const Header: React.FC = () => {
    return (
        <header style={{ border: '1px solid #eff4ff', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <nav>
                <ul style={{listStyle: 'none', display: 'flex', gap:'1rem'}}>
                    {headerLinks.map((link, index) => (
                        <li style={{cursor: 'pointer'}}key={index}>
                            {link.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;