import { useRouter } from "next/router";
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Peca.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ParsedUrlQuery } from "querystring";
import { Key } from "react";
import Script from "next/script";
import Link from "next/link";

interface Params extends ParsedUrlQuery {
    url: string;
}

export default function Processador({ data }: { data: any }) {
    return (
        <html>
            <head>
                <title>Caio Moizés - Memória {`${data[0].fabricante} ${data[0].modelo} ${data[0].capacidade} GB (${data[0].modulos}x${data[0].capacidade / data[0].modulos} GB) ${data[0].tipo_ram.tipo}-${data[0].velocidade}` }</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></Script>
            </head>
            <body>
                <Header />
                <div className={ `container-fluid ${styles.containerFluid}` }>
                    <div className={styles.containerPeca}>
                        <p><Link href={ `/` }>Home</Link> / <Link href={ `/build` }>Monte seu PC</Link> / <Link href={ `/memorias` }>Memórias</Link> / <span>Memória {`${data[0].fabricante} ${data[0].modelo} ${data[0].capacidade} GB (${data[0].modulos}x${data[0].capacidade / data[0].modulos} GB) ${data[0].tipo_ram.tipo}-${data[0].velocidade}` }</span></p>
                        <h1>Memória {`${data[0].fabricante} ${data[0].modelo} ${data[0].capacidade} GB (${data[0].modulos}x${data[0].capacidade / data[0].modulos} GB) ${data[0].tipo_ram.tipo}-${data[0].velocidade}` }</h1>
                        <div className={styles.fotos}>
                            {/* <img src={ `http://localhost:5000/${data[0].imagem}` } /> */}
                            <div className="glide">
                                <div className="glide__track" data-glide-el="track">
                                    <ul className="glide__slides">
                                    <li className="glide__slide">0</li>
                                    <li className="glide__slide">1</li>
                                    <li className="glide__slide">2</li>
                                    </ul>
                                </div>
                                <div className="glide__arrows" data-glide-el="controls">
                                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.precos}>
                            <h2>Preços</h2>
                        </div>
                        <div className={styles.specs}>
                            <h2>Especificações</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Fabricante</th>
                                        <td>{data[0].fabricante}</td>
                                    </tr>
                                    <tr>
                                        <th>Modelo</th>
                                        <td>{data[0].modelo}</td>
                                    </tr>
                                    <tr>
                                        <th>PN</th>
                                        <td>{data[0].pn}</td>
                                    </tr>
                                    <tr>
                                        <th>Tipo</th>
                                        <td>{data[0].tipo}</td>
                                    </tr>
                                    <tr>
                                        <th>Velocidade</th>
                                        <td>{`${data[0].tipo_ram.tipo}-${data[0].velocidade}`}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacidade</th>
                                        <td>{data[0].capacidade} GB</td>
                                    </tr>
                                    <tr>
                                        <th>Módulos</th>
                                        <td>{data[0].modulos} x {data[0].capacidade / data[0].modulos} GB</td>
                                    </tr>
                                    <tr>
                                        <th>CAS Latency</th>
                                        <td>{data[0].cas_latency}</td>
                                    </tr>
                                    <tr>
                                        <th>Timing</th>
                                        <td>{data[0].timing}</td>
                                    </tr>
                                    <tr>
                                        <th>Voltagem</th>
                                        <td>{data[0].voltagem} V</td>
                                    </tr>
                                    <tr>
                                        <th>Dissipador</th>
                                        <td>{data[0].dissipador ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                    </tr>
                                    <tr>
                                        <th>ECC</th>
                                        <td>{data[0].ecc ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                    </tr>
                                    <tr>
                                        <th>Registrada</th>
                                        <td>{data[0].registrada ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                    </tr>
                                    <tr>
                                        <th>Cor</th>
                                        <td>{data[0].cor}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
                <script>
                    new Glide('.glide').mount()
                </script>
            </body>
        </html>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api-caiomoizes.vercel.app/memorias`);
    const data = await response.json();

    const paths = data.map((result: any) => ({
        params: { url: result.url }
    }));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { url } = context.params as Params;

    // const response = await fetch(`https://api-caiomoizes.vercel.app/${url}/${peca}`);
    const response = await fetch(`http://localhost:5000/memorias/${url}`);
    const data = await response.json();
    
    return {
        props: {
            data: data,
        },
        revalidate: 60
    }
}