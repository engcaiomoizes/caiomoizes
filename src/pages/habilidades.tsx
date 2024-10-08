import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Script from 'next/script';
//import Modal from '../components/Modal';

export default function Habilidades() {
    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [overflow, setOverflow] = useState('visible');

    useEffect(() => {
        if (showModal) {
            console.log('ON');
            setOverflow('hidden');
        } else {
            console.log('OFF');
            setOverflow('visible');
        }
    }, [showModal]);

    const handleModal = (e: string, c: string, t: string) => {
        setImgSrc(e);
        setText(t);
        setTitle(c);
        setShowModal(true);
    };

    return (
        <html style={{ overflow: overflow }}>
            <head>
                <title>Caio Moizés - Habilidades</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body style={{  }}>
                <Header />
                <div className="container-fluid">
                    <h1>Habilidades</h1>
                    <div className="container-pers2">
                        <span>
                            {/* Abaixo estão as linguagens de programação e softwares que possuo conhecimento. Caso queria realizar algum projeto com os conteúdos abaixo, entre em contato. */}
                        </span>
                        <div className="item-portfolio">
                            <img 
                                src="img/cpp_icon.png"
                                title="C++"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "C++",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/html_icon.png"
                                title="HTML"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "HTML",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/css_icon.png"
                                title="CSS"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "CSS",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/js_icon.png"
                                title="JavaScript"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "JavaScript",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/php_icon.png"
                                title="PHP"
                                // onClick={(e: { target: { src: string; }; }, t: string, c: string) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "PHP",
                                //         ""
                                //     )
                                // }}
                            />
                            {/* <Modal show={ showModal } onClose={() => setShowModal(false)}>
                                <div className="divimg-modal">
                                    <img src={imgSrc} />
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                <h3>{title}</h3>
                                {text}
                            </Modal> */}
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/laravel_icon.png"
                                title="Laravel"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Angular",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/vuejs_icon.png"
                                title="VueJS"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Android",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/mysql_icon.png"
                                title="MySQL"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "MySQL",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/firebird-logo.png"
                                title="Firebird"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Firebird",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/rest-api-icon-8.jpg"
                                title="API REST"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "API RESTful",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/logo-java.png"
                                title="Java"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Java",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/android_icon.png"
                                title="Android"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Android",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        {/* <div className="item-portfolio">
                            <img 
                                src="img/vegaspro_icon.png"
                                title="Vegas Pro"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "DaVinci Resolve",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/photoshop_icon.png"
                                title="Adobe Photoshop"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Adobe Photoshop",
                                //         ""
                                //     )
                                // }}
                            />
                        </div>
                        <div className="item-portfolio">
                            <img 
                                src="img/illustrator_icon.png"
                                title="Adobe Illustrator"
                                // onClick={(e, t) => {
                                //     handleModal(
                                //         e.target.src,
                                //         "Adobe Illustrator",
                                //         ""
                                //     )
                                // }}
                            />
                        </div> */}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}