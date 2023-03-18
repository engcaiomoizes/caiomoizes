import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import Script from 'next/script';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [restantes, setRestantes] = useState(255);
    const [texto, setTexto] = useState('');

    useEffect(() => {
        setRestantes(255 - mensagem.length);
    }, [mensagem]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Enviando...');

        let data = {
            nome,
            email,
            mensagem
        };

        if (!nome || !email || !mensagem) {
            setTexto('Preencha todos os campos!');
        } else {
            fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log('Response received');
                if (res.status == 200) {
                    console.log('Response succeeded!');
                    setEnviado(true);
                    setNome('');
                    setEmail('');
                    setMensagem('');
                    setTexto('E-mail enviado com sucesso!');
                }
            });
        }
    };

    return (
        <html>
            <head>
                <title>Caio Moizés - Contato</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <h1>Contato</h1>
                    <div className="container-contato">
                        <p>Utilize o formulário abaixo para entrar em contato.</p>
                        <span className="email-enviado">{texto}</span>
                        <form className="form-contato" method="POST">
                            <div className="form-column">
                                <label htmlFor="">Nome</label>
                                <input type="text" name="nome" id="nome" autoComplete="off" maxLength={60} required value={nome} onChange={(e) => {setNome(e.target.value)}} />
                            </div>
                            <div className="form-column">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" autoComplete="off" maxLength={60} required value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="form-row">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="mensagem" autoComplete="off" maxLength={255} required value={mensagem} onChange={(e) => {setMensagem(e.target.value)}}></textarea>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="form-row">
                                <span>Restantes: {restantes}</span>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <input className="botao-enviar" type="submit" name="enviar" id="enviar" onClick={(e) => {handleSubmit(e)}} value="Enviar" />
                        </form>
                        <p>Caso preferir, entre em contato via WhatsApp clicando <Link href={ `https://wa.me/${process.env.NEXT_PUBLIC_TELEFONE_NUM}` }>aqui</Link>.</p>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}