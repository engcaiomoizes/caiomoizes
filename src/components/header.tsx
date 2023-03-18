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
                    <li><a href="/">Home</a></li>
                    <li><a href="/setup">Meu Setup</a></li>
                    <li><a href="/habilidades">Habilidades</a></li>
                    {/* <li><a href="/portfolio">Portfólio</a></li>
                    <li><a href="/orcamento">Orçamento</a></li> */}
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/chat">Chat</a></li>
                    <li><a href="/newsletter">Newsletter</a></li>
                    <li><a href="/build">Monte seu PC</a></li>
                </ul>
            </div>
        </div>
    );
}