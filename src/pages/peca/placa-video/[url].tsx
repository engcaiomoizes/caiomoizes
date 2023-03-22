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
                <title>Caio Moizés - Contato</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className={ `container-fluid ${styles.containerFluid}` }>
                    <div className={styles.containerPeca}>
                        <p><Link href={ `` }>Home</Link> / <Link href={ `` }>Monte seu PC</Link> / <Link href={ `` }>Processadores</Link> / <span>Processador {`${data[0].fabricante} ${data[0].modelo} ${data[0].frequencia} GHz ${data[0].nucleos}-Core` }</span></p>
                        <h1>Placa de vídeo {`${data[0].fabricante} ${data[0].modelo} ${data[0].frequencia} GHz ${data[0].nucleos}-Core` }</h1>
                        <div className={styles.columns}>
                            <div className={ `${styles.column} ${styles.colSpec}` }>
                                <div className={styles.fotos}>
                                    <ul className={styles.slider}>
                                        <li>
                                            <input type="radio" id="slide1" name="slide" checked />
                                            <label htmlFor="slide1"></label>
                                            <img src={ `http://localhost:5000/${data[0].imagem}` } />
                                        </li>
                                    </ul>
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
                                                <th>Série</th>
                                                <td>{data[0].serie}</td>
                                            </tr>
                                            <tr>
                                                <th>Interface</th>
                                                <td>{data[0].interface}</td>
                                            </tr>
                                            <tr>
                                                <th>Chipset</th>
                                                <td>{data[0].chipset}</td>
                                            </tr>
                                            <tr>
                                                <th>Tipo da memória</th>
                                                <td>{data[0].tipo_memoria}</td>
                                            </tr>
                                            <tr>
                                                <th>Tamanho da memória</th>
                                                <td>{data[0].memoria}</td>
                                            </tr>
                                            <tr>
                                                <th>Core Clock</th>
                                                <td>{data[0].core_clock} GHz</td>
                                            </tr>
                                            <tr>
                                                <th>Boost Clock</th>
                                                <td>{data[0].boost_clock} GHz</td>
                                            </tr>
                                            <tr>
                                                <th>Consumo (TDP)</th>
                                                <td>{data[0].tdp} W</td>
                                            </tr>
                                            <tr>
                                                <th>Fanless</th>
                                                <td>{data[0].fanless ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Water Cooled</th>
                                                <td>{data[0].water_cooled ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Suporte a Multi-GPU</th>
                                                <td>{data[0].suporte_multigpu ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Comprimento</th>
                                                <td>{data[0].comprimento} mm</td>
                                            </tr>
                                            <tr>
                                                <th>Suporte a Framesync</th>
                                                <td>{data[0].frame_sync}</td>
                                            </tr>
                                            <tr>
                                                <th>Portas DVI</th>
                                                <td>{data[0].portas_dvi}</td>
                                            </tr>
                                            <tr>
                                                <th>Portas HDMI</th>
                                                <td>{data[0].portas_hdmi}</td>
                                            </tr>
                                            <tr>
                                                <th>Portas Mini-HDMI</th>
                                                <td>{data[0].portas_minihdmi}</td>
                                            </tr>
                                            <tr>
                                                <th>Portas DisplayPort</th>
                                                <td>{data[0].portas_dp}</td>
                                            </tr>
                                            <tr>
                                                <th>Portas Mini-DisplayPort</th>
                                                <td>{data[0].portas_minidp}</td>
                                            </tr>
                                            <tr>
                                                <th>Cor</th>
                                                <td>{data[0].cor}</td>
                                            </tr>
                                            <tr>
                                                <th>Cor do LED</th>
                                                <td>{data[0].cor_led == 'Não' ? <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div> : data[0].graficos_integrados}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={ `${styles.column} ${styles.colPrecos}` }>
                                <div className={styles.precos}>
                                    <h2>Preços</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api-caiomoizes.vercel.app/placas-video`);
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

    // const response = await fetch(`http://localhost:5000/placas-video/${url}`);
    const response = await fetch(`https://api-caiomoizes.vercel.app/placas-video/${url}`);
    const data = await response.json();
    
    return {
        props: {
            data: data,
        },
        revalidate: 60
    }
}