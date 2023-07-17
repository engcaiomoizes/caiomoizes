import { useState } from "react";
import axios from "axios"; // Importação para banco de dados Firebase
import styles from '../styles/Newsletter.module.scss';
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";

export default function Newsletter() {
    const [email, setEmail] = useState('');
    // const [nome, setNome] = useState('');
    const [state, setState] = useState('IDLE');
    const [errorMessage, setErrorMessage] = useState(null);

    // Função para banco de dados Firebase
    const subscribe = async () => {
        setState('LOADING');
        setErrorMessage(null);
        try {
            const response = await axios.post("https://api-caiomoizes.vercel.app/newsletter", { email });
            setState('SUCCESS');
            setEmail('');
        } catch (e: any) {
            setErrorMessage(e.response.data.error);
            setState('ERROR');
        }
    };

    // Função para banco de dados Supabase - PostgreeSQL
    // const subscribe = async () => {
    //     try {
    //         const res = await fetch(
    //             `http://localhost:5000/newsletter`,
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({ email: email })
    //             }
    //         );
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <html>
            <head>
                <title>Caio Moizés - Newsletter</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <h1>Newsletter</h1>
                    <p className={styles.descPage}>Cadastre-se para receber todos os conteúdos e novidades.</p>
                    <div className={styles.containerFluid}>
                        <div className={styles.form}>
                            {state === "ERROR" && (
                                <span>{errorMessage}</span>
                            )}
                            {state === "SUCCESS" && (
                                <span>Sucesso!</span>
                            )}
                            {/* <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} /> */}
                            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="button" disabled={state === "LOADING"} onClick={subscribe}>Enviar</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}