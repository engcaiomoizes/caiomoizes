import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from '../styles/AblyChatComponent.module.css';

export default function AblyChatComponent() {
    let inputBox = null;
    let messageEnd = null;

    const [nome, setNome] = useState('');

    const [messageText, setMessageText] = useState("");
    const [receivedMessages, setMessages] = useState([]);
    const messageTextIsEmpty = messageText.trim().length === 0;

    const [channel, ably] = useChannel("chat-demo", (message) => {
        // Here we're computing the state that'll be drawn into the message history
        // We do that by slicing the last 199 messages from the receivedMessages buffer
    
        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);
    
        // Then finally, we take the message history, and combine it with the new message
        // This means we'll always have up to 199 message + 1 new message, stored using the
        // setMessages react useState hook
    });

    const sendChatMessage = (messageText, nome) => {
        if (!nome) {
            alert("PREENCHA O SEU NOME");
        } else {
            channel.publish({ name: nome, data: messageText });
            setMessageText("");
            inputBox.focus();
        }
    }

    const handleFormSubmission = () => {
        //event.preventDefault();
        sendChatMessage(messageText, nome);
    }

    const handleKeyPress = (e) => {
        if (e.charCode !== 13 || messageTextIsEmpty) {
          return;
        }
        sendChatMessage(messageText, nome);
        event.preventDefault();
    }

    const messages = receivedMessages.map((message, index) => {
        const author = message.connectionId === ably.connection.id ? "Eu" : message.name;
        if (author == "Eu") {
            return (
                <div className="sua-mensagem">
                    <h2>{author}</h2>
                    <span>{message.data}</span>
                </div>
            );
        } else {
            return (
                <div className="mensagem">
                    <h2>{author}</h2>
                    <span>{message.data}</span>
                </div>
            );
        }
    });

    useEffect(() => {
        messageEnd.scrollIntoView({ behaviour: "smooth" });
    });

    return (
        <div>
            {/* <label for="nome" className="label-author">Nome</label> */}
            <input type="text" className="input-author" name="nome" id="nome" placeholder="Nome" value={nome} onChange={(e) => {setNome(e.target.value)}} />
            <div className="container-chat">
                <div className="chats">
                    {messages}
                    <div ref={(element) => { messageEnd = element; }}></div>
                </div>
                <form onSubmit={handleFormSubmission} className="text-box">
                    <textarea
                    ref={(element) => { inputBox = element; }}
                    value={messageText}
                    placeholder="Digite a mensagem..."
                    onChange={e => setMessageText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={styles.textarea}
                    ></textarea>
                    <div className="btn-send" onClick={handleFormSubmission}><i className="fa-solid fa-paper-plane"></i></div>
                </form>
            </div>
        </div>
    );
}