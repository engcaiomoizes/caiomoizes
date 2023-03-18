import { useRouter } from "next/router";
import Header from '../components/header';
import Footer from '../components/footer';
//import Pecas from "../components/pecas";
import styles from '../styles/Componentes.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ParsedUrlQuery } from "querystring";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import Script from "next/script";

interface Params extends ParsedUrlQuery {
    componente: string;
}

export default function Componentes({ data, headers }: { data: any; headers: any }) {
    const { query } = useRouter();

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
                <div className={`container-fluid ${styles.container}`}>
                    {/* <h1>Processadores</h1> */}
                    <div className={`${styles.containerFiltros}`}>
                        <h2>Filtros</h2>
                        <div className={`${styles.range}`}>
                            <h3>Preço</h3>
                            <input type="range" className={`${styles.formRange}`} style={{ float: 'left' }} id="customRange1" min="239" max="8101" value="239" />
                            <input type="range" className={`${styles.formRange}`} style={{ float: 'right' }} id="customRange1" min="239" max="8101" value="8101" />
                            <input type="number" className="form-control" style={{ float: 'left' }} min="239" max="8101" />
                            <input type="number" className="form-control" style={{ float: 'right' }} min="239" max="8101" />
                            <span>Mínimo / Máximo (R$)</span>
                        </div>
                        <div className={`${styles.check} form-check`}>
                            <h3>Fabricantes</h3>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="checkbox" value="" id="all" defaultChecked />
                                <label className="form-check-label fw-bold" htmlFor="all">
                                    Todos
                                </label>
                            </div>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="checkbox" value="" id="amd" />
                                <label className="form-check-label" htmlFor="amd">
                                    AMD
                                </label>
                            </div>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="checkbox" value="" id="intel" />
                                <label className="form-check-label" htmlFor="intel">
                                    Intel
                                </label>
                            </div>
                        </div>
                        <div className={`${styles.check} form-check`}>
                            <h3>Suporte ECC</h3>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="radio" name="ecc" value="" id="all" defaultChecked />
                                <label className="form-check-label fw-bold" htmlFor="all">
                                    Todos
                                </label>
                            </div>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="radio" name="ecc" value="" id="sim" />
                                <label className="form-check-label" htmlFor="sim">
                                    Sim
                                </label>
                            </div>
                            <div className={`${styles.checkbox}`}>
                                <input className="form-check-input" type="radio" name="ecc" value="" id="nao" />
                                <label className="form-check-label" htmlFor="nao">
                                    Não
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.containerItens}`}>
                    <table className="table">
                            <thead>
                                <tr>
                                    <td className={`${styles.colSmall}`} scope="col"></td>
                                    <th scope="col">{headers.col1}</th>
                                    <th scope="col">{headers.col2}</th>
                                    <th scope="col">{headers.col3}</th>
                                    <th scope="col">{headers.col4}</th>
                                    <th scope="col">{headers.col5}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((result: {
                                            id: Key;
                                            imagem: any;
                                            col1: string | number;
                                            col2: string | number;
                                            col3: string | number;
                                            col4: string | number;
                                            col5: string | number;
                                        }) => (
                                        <tr key={result.id}>
                                            <th scope="row">
                                                <input className="form-check-input" type="checkbox" value="" id="intel" />
                                            </th>
                                            <td>
                                                <img src={`http://localhost:5000/${result.imagem}`} />
                                                <a href="#">{result.col1}</a>
                                            </td>
                                            <td><span>{result.col2}</span></td>
                                            <td><span>{result.col3}</span></td>
                                            <td><span>{result.col4}</span></td>
                                            <td><span>{result.col5}</span></td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" value="" id="intel" />
                                    </th>
                                    <td>
                                        <img src='http://localhost:5000/uploads/2023-03-17T03-59-41.836Z-fonte-cx650f.png' />
                                        <a href="#">AMD Ryzen 7 5700X</a>
                                    </td>
                                    <td><span>3.4 GHz</span></td>
                                    <td><span>8</span></td>
                                    <td><span>16</span></td>
                                    <td><span>65 W</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" value="" id="intel" />
                                    </th>
                                    <td>
                                        <img src='http://localhost:5000/uploads/2023-03-17T03-59-41.836Z-fonte-cx650f.png' />
                                        <a href="#">AMD Ryzen 7 5700X</a>
                                    </td>
                                    <td><span>3.4 GHz</span></td>
                                    <td><span>8</span></td>
                                    <td><span>16</span></td>
                                    <td><span>65 W</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" value="" id="intel" />
                                    </th>
                                    <td>
                                        <img src='http://localhost:5000/uploads/2023-03-17T03-59-41.836Z-fonte-cx650f.png' />
                                        <a href="#">AMD Ryzen 7 5700X</a>
                                    </td>
                                    <td><span>3.4 GHz</span></td>
                                    <td><span>8</span></td>
                                    <td><span>16</span></td>
                                    <td><span>65 W</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" value="" id="intel" />
                                    </th>
                                    <td>
                                        <img src='http://localhost:5000/uploads/2023-03-17T03-59-41.836Z-fonte-cx650f.png' />
                                        <a href="#">AMD Ryzen 7 5700X</a>
                                    </td>
                                    <td><span>3.4 GHz</span></td>
                                    <td><span>8</span></td>
                                    <td><span>16</span></td>
                                    <td><span>65 W</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { componente: 'processadores'} },
            { params: { componente: 'fontes'} },
            { params: { componente: 'placas-mae'} },
            { params: { componente: 'placas-video'} },
            { params: { componente: 'memorias'} },
            { params: { componente: 'gabinetes'} },
        ],
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { componente } = context.params as Params;

    const response = await fetch(`https://api-caiomoizes.vercel.app/${componente}`);
    const data = await response.json();

    let headers;

    switch (componente) {
        case 'processadores':
            headers = {
                col1: 'Processador',
                col2: 'Frequência',
                col3: 'Núcleos',
                col4: 'Threads',
                col5: 'Consumo (TDP)'
            };
            break;
        case 'fontes':
            headers = {
                col1: 'Fonte',
                col2: 'Tipo',
                col3: 'Modular',
                col4: 'Cert.',
                col5: 'Potência'
            };
            break;
        case 'placas-mae':
            headers = {
                col1: 'Placa-mãe',
                col2: 'Socket CPU',
                col3: 'Formato',
                col4: 'Slots Mem.',
                col5: 'Máx. Memória'
            }
            break;
        case 'placas-video':
            headers = {
                col1: 'Placa de vídeo',
                col2: 'Chipset',
                col3: 'Memória',
                col4: 'Clock',
                col5: 'Consumo (TDP)'
            }
            break;
        case 'memorias':
            headers = {
                col1: 'Memória',
                col2: 'Tipo',
                col3: 'Velocidade',
                col4: 'Módulos',
                col5: 'Capacidade'
            }
            break;
        case 'gabinetes':
            headers = {
                col1: 'Gabinete',
                col2: 'Tipo',
                col3: 'Fonte',
                col4: 'Int. 3.5"',
                col5: 'Int. 2.5"'
            }
            break;
    }
    
    return {
        props: {
            data: data,
            headers: headers,
        },
        revalidate: 20
    }
}