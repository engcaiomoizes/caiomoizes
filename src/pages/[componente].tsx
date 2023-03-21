import { useRouter } from "next/router";
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Componentes.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ParsedUrlQuery } from "querystring";
import { Key } from "react";
import Script from "next/script";
import Link from "next/link";

interface Params extends ParsedUrlQuery {
    componente: string;
}

export default function Componentes({ data, headers }: { data: any; headers: any }) {
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
                            <input type="number" className="form-control" style={{ float: 'left' }} min="239" max="8101" defaultValue={ `239` } />
                            <input type="number" className="form-control" style={{ float: 'right' }} min="239" max="8101" defaultValue={ `8101` } />
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
                                    <td className={`${styles.colSmall}`} scope="col"></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(data) ?
                                    data.map((result: {
                                            id: Key;
                                            imagem: any;
                                            col1: string | number;
                                            col2: string | number;
                                            col3: string | number;
                                            col4: string | number;
                                            col5: string | number;
                                            url: string;
                                        }) => (
                                        <tr key={result.id}>
                                            <th scope="row">
                                                <input className="form-check-input" type="checkbox" value="" id="intel" />
                                            </th>
                                            <td>
                                            <Link href={ `/peca/${result.url}` }>
                                                    <div className={ `` }>
                                                        <img src={`https://api-caiomoizes.vercel.app/${result.imagem}`} />
                                                    </div>
                                                </Link>
                                                <Link href={ `/peca/${result.url}` }>{result.col1}</Link>
                                            </td>
                                            <td><span>{result.col2}</span></td>
                                            <td><span>{result.col3}</span></td>
                                            <td><span>{result.col4}</span></td>
                                            <td><span>{result.col5}</span></td>
                                            <td><button><i className="fa-solid fa-plus"></i></button></td>
                                        </tr>
                                    )) : null
                                }
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

    console.log(data[0].urlamigavel);

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
            };
            break;
        case 'placas-video':
            headers = {
                col1: 'Placa de vídeo',
                col2: 'Chipset',
                col3: 'Memória',
                col4: 'Clock',
                col5: 'Consumo (TDP)'
            };
            break;
        case 'memorias':
            headers = {
                col1: 'Memória',
                col2: 'Tipo',
                col3: 'Velocidade',
                col4: 'Módulos',
                col5: 'Capacidade'
            };
            break;
        case 'gabinetes':
            headers = {
                col1: 'Gabinete',
                col2: 'Tipo',
                col3: 'Fonte',
                col4: 'Int. 3.5"',
                col5: 'Int. 2.5"'
            };
            break;
    }
    
    return {
        props: {
            data: data,
            headers: headers,
        },
        revalidate: 60
    }
}