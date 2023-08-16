import { useEffect, useState, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import styles from "@/styles/Trabalhos.module.css";

export default function Trabalhos() {
    const [overflow, setOverflow] = useState('visible');

    return (
        <>
        <html style={{ overflow: overflow }}>
            <head>
                <title>Caio Moizés - Trabalhos</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <h1>Trabalhos</h1>
                    <div className="container-pers2">
                        <span>
                            Abaixo estão as linguagens de programação e softwares que possuo conhecimento. Caso queria realizar algum projeto com os conteúdos abaixo, entre em contato.
                        </span>
                        <div className={styles.card}>
                            <div className={styles.item}>
                                <img src="img/xadrez_icon.png" />
                                <h2>Xadrez por voz</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
        </>
    );
}