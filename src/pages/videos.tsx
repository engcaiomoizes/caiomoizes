import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

export default function Videos() {
    return (
        <>
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Caio Moizés - Vídeos</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></Script>
        </head>
        <body>
            <Header />
            <div className="container-fluid">
                <h1>Vídeos</h1>
                <div className="container-pers2">
                    <span>Aqui você encontra todas as minhas vídeo-aulas do YouTube.</span>
                    <h1 style={{ color: 'red' }}>Em Breve!</h1>
                </div>
            </div>
            <Footer />
        </body>
        </html>
        </>
    );
}