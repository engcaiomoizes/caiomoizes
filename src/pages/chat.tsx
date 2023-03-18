import { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import dynamic from 'next/dynamic'
// import { getAuth } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { db } from '../services/firebase';
import { useRouter } from 'next/router';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Chat() {
    const [nome, setNome] = useState('');
    const [mensagens, setMensagens] = useState([]);
    const [restantes, setRestantes] = useState(255);
    const [texto, setTexto] = useState('');

    // const auth = getAuth();
    const router = useRouter();
    // const [user, loading] = useAuthState(auth);

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    // if (!user) {
    //     router.push("/login");
    //     return <div>Por favor, faça login para continuar</div>;
    // }

    // const callApi = async () => {
    //     // const token = await user.getIdToken();
    //     // console.log(token);
        
    //     // const echoEndpoint = "https://jwtecho.pixegami.io";
    //     // const certStr =
    //     // "-----BEGIN CERTIFICATE-----\nMIIDHTCCAgWgAwIBAgIJAL5KzAr9wmGHMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV\nBAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTIz\nMDMxMTA5MzkyMloXDTIzMDMyNzIxNTQyMlowMTEvMC0GA1UEAwwmc2VjdXJldG9r\nZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQDB7l9kjFO2Qx9d+89V39UyIqalRJddcWn3kqgS8FZ4QkX5\nwL/aAMYa5rgURga51H0Q8Zm9Z+eLmGCothdaEu225md9JMYCW7PdLr6g5Ojigfnp\nslH0XoIgbPU1hSRCcyz5CzgBFWjhA8+j6q7ms5Annii6JV887aIAoKeE5IKrA+v9\ngXzC2rxcpjW8cVQORQOVSF3qKq635ynC2IrbMUE1iOPFthS7ONKkyhvYT+uAGiX0\nhtVoEkUf2k9EG1jPj/LQ2xlo/KGJcHdIFMlGgnCZahdhOVWBtcZ1hX/7TqeJwYo9\naHN/nIDQiayj6qy+V8lRVV7+5YZTGGstsOYe8o5vAgMBAAGjODA2MAwGA1UdEwEB\n/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G\nCSqGSIb3DQEBBQUAA4IBAQBfnJjCwrBa7za107xZS3LD/fIfXuOFpuQirKlOJkLE\nUGbyF7dBDykoSDPe7s5xfUZtFnvu3xVfiFGkyA9lIs6dWw/Di9UdLLgfm2E+9vzH\n9XfU421zVMAQpO9AiMw3h5l2OZHk/+ae81OcyFlq1SphIVJOqwBNj8841RT6Ui9i\n8i//jLqMDx2i91lDBwHGNrXxaAMWD6dm8On9nKhEYs8dze2ge87P0P8nFEYDJUNQ\nFbA4TrqjbNtC3XuZHZpsUolKVs+q2+PavnMj/RRQegtLp9jTZq4M6iifrnqNbte9\nzbCArdgqFZyJKAvAnQlQ+XVNMf4bo/5Y55kMUlq/YQBt\n-----END CERTIFICATE-----\n";
    //     // const encodedCertStr = encodeURIComponent(certStr);
    //     // const audience = "pixegami-online-store";

    //     // const verificationEndpoint = `${echoEndpoint}/verify?audience=${audience}&cert_str=${certStr}`;

    //     // const requestInfo = {
    //     //     headers: {
    //     //         Authorization: "Bearer " + token,
    //     //     },
    //     // };

    //     // const response = await fetch(verificationEndpoint, requestInfo);
    //     // const responseBody = await response.json();
    //     // console.log(responseBody);
    // }

    return (
        <html>
            <head>
                <title>Caio Moizés - Chat</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js"></script>
            </head>
            <body>
                <Header />
                <div className="container-fluid">
                    <h1>Chat</h1>
                    <div className="container-pers2">
                        <p>Utilize esse chat para falar com os visitantes do site em tempo real.</p>
                        <AblyChatComponent />
                        {/* <div onClick={() => auth.signOut()}>Sair</div> */}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}