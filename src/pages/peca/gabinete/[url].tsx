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
                        <p><Link href={ `` }>Home</Link> / <Link href={ `` }>Monte seu PC</Link> / <Link href={ `` }>Processadores</Link> / <span>Gabinete {`${data[0].fabricante} ${data[0].modelo} ${data[0].tipo} ${data[0].cor ? `(${data[0].cor})` : ''}` }</span></p>
                        <h1>Gabinete {`${data[0].fabricante} ${data[0].modelo} ${data[0].tipo} ${data[0].cor ? `(${data[0].cor})` : ''}` }</h1>
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
                                                <th>Tipo</th>
                                                <td>{data[0].tipo}</td>
                                            </tr>
                                            <tr>
                                                <th>Formatos de placa-mãe suportados</th>
                                                <td>{data[0].formatos.map((result: any) => {
                                                    return (
                                                        <span>{result.formato}</span>
                                                    );
                                                })}</td>
                                            </tr>
                                            <tr>
                                                <th>Fonte inclusa</th>
                                                <td>{data[0].fonte ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Potência da fonte inclusa</th>
                                                <td>{!data[0].potencia_fonte ? <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div> : `${data[0].potencia_fonte} W`}</td>
                                            </tr>
                                            <tr>
                                                <th>Painel frontal USB 3.0/3.1</th>
                                                <td>{data[0].painel_frontal_usb30 ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Filtro removível</th>
                                                <td>{data[0].filtro_removivel ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>Janela lateral</th>
                                                <td>{data[0].janela_lateral ? <div className={styles.sim}><i className="fa-solid fa-check"></i></div> : <div className={styles.nao}><i className="fa-solid fa-xmark"></i></div>}</td>
                                            </tr>
                                            <tr>
                                                <th>USB 2.0</th>
                                                <td>{data[0].usb_20}</td>
                                            </tr>
                                            <tr>
                                                <th>USB 3.0 / 3.1 Gen1</th>
                                                <td>{`${data[0].usb_30}`}</td>
                                            </tr>
                                            <tr>
                                                <th>Slots de expansão Full-Height</th>
                                                <td>{data[0].slots_exp_fh}</td>
                                            </tr>
                                            <tr>
                                                <th>Slots de expansão Half-Height</th>
                                                <td>{data[0].slots_exp_hh}</td>
                                            </tr>
                                            <tr>
                                                <th>Baia externa 5.25&quot;</th>
                                                <td>{data[0].baia_externa_525}</td>
                                            </tr>
                                            <tr>
                                                <th>Baia externa 3.5&quot;</th>
                                                <td>{data[0].baia_externa_35}</td>
                                            </tr>
                                            <tr>
                                                <th>Baia interna 3.5&quot;</th>
                                                <td>{data[0].baia_interna_35}</td>
                                            </tr>
                                            <tr>
                                                <th>Baia interna 2.5&quot;</th>
                                                <td>{data[0].baia_interna_25}</td>
                                            </tr>
                                            <tr>
                                                <th>Tamanho máximo da placa de vídeo</th>
                                                <td>{`${data[0].tamanho_max_gpu} mm`}</td>
                                            </tr>
                                            <tr>
                                                <th>Dimensões</th>
                                                <td>{`${data[0].dimensoes} mm`}</td>
                                            </tr>
                                            <tr>
                                                <th>Volume</th>
                                                <td>{`${data[0].volume} litros`}</td>
                                            </tr>
                                            <tr>
                                                <th>Peso</th>
                                                <td>{`${data[0].peso} kg`}</td>
                                            </tr>
                                            <tr>
                                                <th>Cor</th>
                                                <td>{data[0].cor}</td>
                                            </tr>
                                            <tr>
                                                <th>Cor do LED</th>
                                                <td>{data[0].cor_led}</td>
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
    const response = await fetch(`https://api-caiomoizes.vercel.app/gabinetes`);
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

    // const response = await fetch(`http://localhost:5000/gabinetes/${url}`);
    const response = await fetch(`https://api-caiomoizes.vercel.app/gabinetes/${url}`);
    const data = await response.json();
    
    return {
        props: {
            data: data,
        },
        revalidate: 60
    }
}