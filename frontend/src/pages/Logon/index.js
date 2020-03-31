import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';
import hero from '../../assets/hero.png'
// import logo from '../../assets/logo.png'

export default function Logon() {

    const [id, setiD] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Falha no login. Tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
            <img className="invisible" src="" alt="Be The Hero"/>
            {/* logoImg */}

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setiD(e.target.value)} />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FaArrowRight size={16} color="#FF6E00"/>
                    Não tenho cadastro
                </Link>
            </form>

            </section>

            <img src={hero} alt="Heroes" /> 
            {/* herosImg */}
        </div>
    );
}