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
                <title>Caio Moizés - Fonte {`${data[0].fabricante} ${data[0].modelo} ${data[0].potencia} W ${data[0].certificado} ${data[0].modular}-Modular ${data[0].tipo}` }</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className={ `container-fluid ${styles.containerFluid}` }>
                    <div className={styles.containerPeca}>
                        <p><Link href={ `/` }>Home</Link> / <Link href={ `/build` }>Monte seu PC</Link> / <Link href={ `/fontes` }>Fontes</Link> / <span>Fonte {`${data[0].fabricante} ${data[0].modelo} ${data[0].potencia} W ${data[0].certificado} ${data[0].modular}-Modular ${data[0].tipo}` }</span></p>
                        <h1>Fonte {`${data[0].fabricante} ${data[0].modelo} ${data[0].potencia} W ${data[0].certificado} ${data[0].modular}-Modular ${data[0].tipo}` }</h1>
                        <div className={styles.fotos}>
                            <img src={ `http://localhost:5000/${data[0].imagem}` } />
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
                                        <th>Série</th>
                                        <td>{data[0].serie}</td>
                                    </tr>
                                    <tr>
                                        <th>Tipo</th>
                                        <td>{data[0].tipo}</td>
                                    </tr>
                                    <tr>
                                        <th>Potência</th>
                                        <td>{data[0].potencia} W</td>
                                    </tr>
                                    <tr>
                                        <th>Fanless</th>
                                        <td>{data[0].fanless ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                    </tr>
                                    <tr>
                                        <th>Modular</th>
                                        <td>{data[0].modular}</td>
                                    </tr>
                                    <tr>
                                        <th>Certificado de eficiência</th>
                                        <td>{data[0].certificado}</td>
                                    </tr>
                                    <tr>
                                        <th>Eficiência</th>
                                        <td>{!data[0].eficiencia ? <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div> : data[0].graficos_integrados}</td>
                                    </tr>
                                    <tr>
                                        <th>Saída</th>
                                        <td>{!data[0].saida ? <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div> : data[0].graficos_integrados}</td>
                                    </tr>
                                    <tr>
                                        <th>Conectores EPS</th>
                                        <td>{data[0].eps}</td>
                                    </tr>
                                    <tr>
                                        <th>Conectores SATA</th>
                                        <td>{data[0].sata}</td>
                                    </tr>
                                    <tr>
                                        <th>Conectores Molex</th>
                                        <td>{data[0].molex}</td>
                                    </tr>
                                    <tr>
                                        <th>Conectores PCI-E de 6 pinos</th>
                                        <td>{data[0].pcie_6pin}</td>
                                    </tr>
                                    <tr>
                                        <th>Conectores PCI-E de 6+2 pinos</th>
                                        <td>{data[0].pcie_62pin}</td>
                                    </tr>
                                    <tr>
                                        <th>Comprimento</th>
                                        <td>{data[0].comprimento} mm</td>
                                    </tr>
                                    <tr>
                                        <th>Peso</th>
                                        <td>{data[0].peso} kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api-caiomoizes.vercel.app/fontes`);
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
    const response = await fetch(`http://localhost:5000/fontes/${url}`);
    const data = await response.json();
    
    return {
        props: {
            data: data,
        },
        revalidate: 60
    }
}