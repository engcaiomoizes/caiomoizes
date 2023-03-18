import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
//import Modal from '../components/Modal';

export default function Habilidades() {
    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [text, setText] = useState();
    const [title, setTitle] = useState();
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

    const handleModal = (e: any, c: any, t: any) => {
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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></script>
            </head>
            <body style={{  }}>
                <Header />
                <div className="container-fluid">
                    <h1>Habilidades</h1>
                    <div className="container-pers2">
                        <span>
                            Segue os conteúdos que possuo habilidades, como linguagens de programação e softwares de edição de imagem e vídeo.
                        </span>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/php_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "PHP",
                                        ""
                                    )
                                }}
                            />
                            </a>
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
                            <a href="#">
                            <img 
                                src="img/html_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "HTML",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/css_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "CSS",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/js_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "JavaScript",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/cpp_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "C++",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/android_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Android",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/mysql_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "MySQL",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/photoshop_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Adobe Photoshop",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/illustrator_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Adobe Illustrator",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/davinci_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "DaVinci Resolve",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/angular_logo.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Angular",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/rest-api-icon-8.jpg"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "API RESTful",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/logo-java.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Java",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                        <div className="item-portfolio">
                            <a href="#">
                            <img 
                                src="img/firebird-logo.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Firebird",
                                        ""
                                    )
                                }}
                            />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}