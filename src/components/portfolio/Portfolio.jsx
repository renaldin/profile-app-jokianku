import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/web.png';
import IMG2 from '../../assets/testcase.png';
import IMG3 from '../../assets/uml.png';
import IMG4 from '../../assets/ui.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Pembuatan Website',
        instagram: 'https://instagram.com/jokian.beta'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Dokumen Test Case (Pengujian Blackbox)',
        instagram: 'https://instagram.com/jokian.beta'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Pembuatan Pemodelan UML (Diagram Usecase, Activity, Sequence, dan Class)',
        instagram: 'https://instagram.com/jokian.beta'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Pembuatan Mockup User Interface (Ui) Menggunakan Figma atau Adobe XD',
        instagram: 'https://instagram.com/jokian.beta'
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <br />
            <h2>Pelayanan Kami</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, year, github, instagram }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <center>
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={instagram} className='btn btn-primary' target='_blank'>Jokian.beta</a>
                                    </div>
                                </center>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio