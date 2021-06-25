import React from 'react';
import SEO from '../components/SEO';

import items from '../data.json';

const IndexPage = () => (
    <>
        <ul>
            {items.map(({ foto, nombre }) => (
                <li style={{ display: 'inline-block' }}>
                    <h2>{nombre}</h2>
                    <img src={foto} alt={nombre} width={100} />
                </li>
            ))}
        </ul>
        <SEO title="👥"></SEO>
    </>
);

export default IndexPage;
