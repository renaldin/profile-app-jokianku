import React from 'react';
import './about.css';
import Logo from '../../assets/logo-real-kotak-biru.png';

const About = () => {
    return (
        <section id='about'>
            <br />
            <h2>Tentang Kami</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Logo} className="about__me-image-me" alt='About Image' />
                    </div>
                </div>

                <div className="about__content">

                    <p>
                        Jokian.beta adalah suatu usaha karya anak bangsa untuk menampung kelah kesuh siswa atau mahasiswa yang kesulitan dalam pengerjaan tugas-tugasnya. Jokian.beta dapat melayani jokian berupa pembuatan website, pembuatan pemodelan <i>Unified Modelling Language</i> (UML) seperti diagram Usecase, diagram Activity, diagram Sequence, dan diagram Class, pembuatan <i>Mockup User Interface</i> (UI) menggunakan Figma atau Adobe XD, dan dokumen Test Case (Pengujian Blackbox).
                    </p>

                    <a href='#contact' className='btn btn-primary'>Kontak Kami</a>
                </div>
            </div>
        </section>
    )
}

export default About