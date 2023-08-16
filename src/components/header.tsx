import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            {/* <div className="topo">
                <div className="info">
                    <h1>Caio Moizés</h1>
                    <h2>Engenheiro da Computação</h2>
                </div>
            </div> */}
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
            <div className="menu">
                <ul>
                    <li><Link href={ `/` }>Home</Link></li>
                    {/* <li><Link href={ `/setup` }>Meu Setup</Link></li> */}
                    <li><Link href={ `/habilidades` }>Habilidades</Link></li>
                    {/* <li><Link href={ `/trabalhos` }>Trabalhos</Link></li> */}
                    {/* <li><Link href={ `/portfolio` }>Portfólio</Link></li>
                    <li><Link href={ `/orcamento` }>Orçamento</Link></li> */}
                    <li><Link href={ `/videos` }>Vídeos</Link></li>
                    <li><Link href={ `/contato` }>Contato</Link></li>
                    <li><Link href={ `/chat` }>Chat</Link></li>
                    <li><Link href={ `/newsletter` }>Newsletter</Link></li>
                    {/* <li><Link href={ `/build` }>Monte seu PC</Link></li> */}
                </ul>
            </div>
        </div>
    );
}