import Header from '../components/header';
import Footer from '../components/footer';
import Script from 'next/script';

export default function Setup() {
    return (
        <html>
            <head>
                <title>Caio Moizés - Meu Setup</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <h1>Meu Setup</h1>
                    <div className="container-setup">
                        <div className="item-setup">
                            <img src="img/processador.png" />
                            <h2>Processador</h2>
                            <span>AMD Ryzen 7 3700X</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/placa-de-video.png" />
                            <h2>Placa de vídeo</h2>
                            <span>EVGA RTX 3060 XC</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/placa-mae.png" />
                            <h2>Placa-Mãe</h2>
                            <span>Asus Prime B450M Gaming/BR</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/memoria-ram.png" />
                            <h2>Memória RAM</h2>
                            <span>XPG Gammix D30 32GB (4x 8GB) 3200MHz</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/fonte.png" />
                            <h2>Fonte</h2>
                            <span>Corsair CX650 80 Plus Bronze</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/gabinete.png" />
                            <h2>Gabinete</h2>
                            <span>Nox Hummer MC Pro</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/ssd.png" />
                            <h2>SSD</h2>
                            <span>WD Green 240GB</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/monitor.png" />
                            <h2>Monitor</h2>
                            <span>Samsung Odyssey G3 24&quot; 144Hz</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/cadeira.png" />
                            <h2>Cadeira</h2>
                            <span>DT3sports Elise Red</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/mouse.png" />
                            <h2>Mouse</h2>
                            <span>Logitech G403 Prodigy</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/teclado_2.png" />
                            <h2>Teclado</h2>
                            <span>Razer Blackwidow Ultimate 2016</span>
                        </div>
                        <div className="item-setup">
                            <img src="img/headset.png" />
                            <h2>Headset</h2>
                            <span>Logitech G533</span>
                        </div>
                    </div>                    
                </div>
                <Footer />
            </body>
        </html>
    );
}