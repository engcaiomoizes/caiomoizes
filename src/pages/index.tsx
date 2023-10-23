import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <html>
            <head>
                <title>Caio Moizés - Engenheiro da Computação</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <div className="perfil">
                        <div className="foto">
                            <img src="img/foto_perfil.jpg" />
                        </div>
                        <div className="p-info">
                            <h1>Perfil</h1>
                            <p>Meu nome é <b>Caio Moizés Santos</b>, tenho 23 anos, sou formado em Engenharia da Computação pelo UniSALESIANO Araçatuba-SP.</p>
                            <div className="redes">
                                <a href={ "https://wa.me/" + process.env.NEXT_PUBLIC_TELEFONE_NUM } target="_blank"><span><i className="fa-brands fa-whatsapp"></i> (18) 99752-4254</span></a>
                                <span><i className="fa-solid fa-envelope"></i> {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                                <a href={ "https://instagram.com/" + process.env.NEXT_PUBLIC_INSTAGRAM_NICK } target="_blank"><span><i className="fa-brands fa-instagram"></i> @{process.env.NEXT_PUBLIC_INSTAGRAM_NICK}</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="container-pers1">
                        <h1>Formação Acadêmica</h1>
                        <div style={{clear: 'both'}}></div>
                        <div className="col-pers1">
                            <h3>Engenharia da Computação</h3>
                            <span>UniSALESIANO Araçatuba-SP</span>
                            <div className="periodo">2018 - 2022</div>
                        </div>
                    </div>
                    <div className="container-pers1">
                        <h1>Experiência Profissional</h1>
                        <div style={{clear: 'both' }}></div>
                        <div className="col-pers1">
                            <h3>Global Websites & Sistemas - Araçatuba/SP</h3>
                            <span>Estagiário</span>
                            <div className="periodo">2019</div>
                        </div>
                        <div className="col-pers1">
                            <h3>Cartório de Registro de Imóveis - Valparaíso/SP</h3>
                            <span>Estagiário</span>
                            <div className="periodo">2020 - 2022</div>
                        </div>
                        <div className="col-pers1">
                            <h3>HS Eletricidade - Valparaíso/SP</h3>
                            <span>Técnico de Informática</span>
                            <div className="periodo">2023</div>
                        </div>
                        <div className="col-pers1">
                            <h3>Secretaria de Assistência Social - Prefeitura Municipal de Araçatuba/SP</h3>
                            <span>Auxiliar de C.P.D.</span>
                            <div className="periodo">2023 - Presente</div>
                        </div>
                    </div>
                    <div className="container-pers1">
                        <h1>Cursos</h1>
                        <div style={{clear: 'both'}}></div>
                        <div className="col-pers1">
                            <h3>Curso de Informática</h3>
                            <span>Inova Cursos</span>
                            <div className="periodo">2013</div>
                        </div>
                        <div className="col-pers1">
                            <h3>Curso de Hardware</h3>
                            <span>Cursos Online SP</span>
                            <div className="periodo">2022</div>
                        </div>
                    </div>
                    <div className="container-pers1">
                        <h1>Trabalho Voluntário</h1>
                        <div style={{clear: 'both'}}></div>
                        <div className="col-pers1">
                            <img src="img/ic_logo.png" />
                            <div style={{clear: 'both'}}></div>
                            <div className="periodo">2015 - 2018</div>
                        </div>
                        <div className="col-pers1">
                            <img src="img/rct_logo.png" />
                            <div style={{clear: 'both'}}></div>
                            <div className="periodo">2019</div>
                        </div>
                    </div>
                        <a className="botao-curriculo" href="pdf/curriculo.pdf" target="_blank">Abrir currículo</a>
                </div>
                <Footer />
            </body>
        </html>
    </>
  )
}
