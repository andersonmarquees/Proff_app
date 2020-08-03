import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/49351999?s=460&u=3974c89c467dc80cd73205658cce584c0c378612&v=4" alt="Anderson"/>
                <div>
                    <strong>Anderson Marques</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta em Física
                <br/><br/>
                Apaixonado por física e tecnologia
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
