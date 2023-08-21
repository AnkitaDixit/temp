import React from 'react';

const headerLinks = [
    { label: 'Contact us', url: '/' },
    { label: 'Careers', url: '/about' },
    { label: 'Locate', url: '/services' },
];

const Footer: React.FC = () => {
    return (
        <footer style={{ border: '1px solid #eff4ff', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <nav>
                <ul style={{listStyle: 'none', display: 'flex', gap:'1rem'}}>
                    {headerLinks.map((link, index) => (
                        <li style={{cursor: 'pointer'}}key={index}>
                            {link.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;