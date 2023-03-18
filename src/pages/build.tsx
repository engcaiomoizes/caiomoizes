import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Build.module.scss';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export default function Build({ org }: { org: any }) {
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
                    <h1>Monte seu PC</h1>
                    <div className={styles.container_build}>
                        <div className={`${styles.note} ${styles.compativel}`}><b><i className="fa-solid fa-check"></i> Compatibilidade checada:</b> nenhum problema encontrado :)</div>
                        <div className={styles.note}>Não sabe por onde começar? <Link href={ `#` }><b>Utilize nosso Assistente.</b></Link></div>
                        <div className={`${styles.note} ${styles.notificacao}`}>
                            <b><i className="fa-solid fa-circle-info"></i> Notificação:</b> build com algumas observações:<br />
                            <span> Placa-mãe Asus Prime B450M Gaming/BR Micro ATX AM4 pode precisar de atualização na BIOS para usar o Processador AMD Ryzen 7 3700X 3.6 GHz 8-Core. Para atualizar a BIOS é necessário um processador compatível.</span>
                        </div>
                        <div className={`${styles.note} ${styles.atencao}`}>
                            <b><i className="fa-solid fa-circle-info"></i> Atenção:</b> build com possíveis incompatibilidades. Veja detalhes:<br />
                            <span> Placa-mãe Asus Prime B450M Gaming/BR Micro ATX AM4 possui 4 slots de memórias, porém 5 módulos de memórias foram selecionados.</span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="col-md-2" scope="col">Peça</th>
                                    <th scope="col">Selecionado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Processador</th>
                                    <td><Link href={ `/processadores` }><button><i className="fa-solid fa-plus"></i> Processador</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Cooler do processador</th>
                                    <td><Link href={ `#` }><button><i className="fa-solid fa-plus"></i> Cooler do processador</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Placa de vídeo</th>
                                    <td><Link href={ `/placas-video` }><button><i className="fa-solid fa-plus"></i> Placa de vídeo</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Placa-mãe</th>
                                    <td><Link href={ `/placas-mae` }><button><i className="fa-solid fa-plus"></i> Placa-mãe</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Memória</th>
                                    <td><Link href={ `/memorias` }><button><i className="fa-solid fa-plus"></i> Memória</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Armazenamento</th>
                                    <td><Link href={ `#` }><button><i className="fa-solid fa-plus"></i> Armazenamento</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Gabinete</th>
                                    <td><Link href={ `/gabinetes` }><button><i className="fa-solid fa-plus"></i> Gabinete</button></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">Fonte</th>
                                    <td><Link href={ `/fontes` }><button><i className="fa-solid fa-plus"></i> Fonte</button></Link></td>
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

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api-caiomoizes.vercel.app/cpu');
    const data = await response.json();

    return {
        props: {
            org: data,
        },
        revalidate: 20
    }
};