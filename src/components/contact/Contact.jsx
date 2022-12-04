import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w8it52y', 'template_ersx12v', form.current, 'JmwsbARp11nUGRXLY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <br />
            <h2>Kontak Kami</h2>

            <div className="container contact__container">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>panjangkalijoki@gmail.com</h5>
                    <a href="mailto:panjangkalijoki@gmail.com" target='_blank'>Kirim Pesan</a>
                </article>
                <article className="contact__option">
                    <FiInstagram className='contact__option-icon' />
                    <h4>Instagram</h4>
                    <h5>@jokian.beta</h5>
                    <a href="https://instagram.com/jokian.beta" target='_blank'>Kirim Pesan</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon' />
                    <h4>Whatsapp</h4>
                    <h5>+62 8384 5405 765</h5>
                    <a href="https://wa.wizard.id/daa1f5" className='a-contact' target='_blank'>Kirim Pesan</a>
                </article>
            </div>
        </section>
    )
}

export default Contact