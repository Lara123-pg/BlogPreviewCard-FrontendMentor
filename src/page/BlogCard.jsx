import "../styles/main.scss";

import illustrationArticle from "../assets/illustration-article.svg";
import imageAvatar from "../assets/image-avatar.webp";

export function BlogCard() {
    return (
        <div id="container" role="container">
            <div id="card" role="main">
                <img src={illustrationArticle} alt="Imagem de ilustração com cores amarela e preta" />

                <div id="publication">
                    <span id="box">Learning</span>
                    <p id="textPublication">Published 21 Dec 2023</p>
                </div>

                <main>
                    <h1>HTML & CSS foundations</h1>

                    <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                </main>

                <footer>
                    <div id="imageProfile">
                        <img src={imageAvatar} alt="Imagem de perfil" />
                    </div>

                    <p>Greg Hooper</p>
                </footer>
            </div>

            <div id="attribution" role="informations">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/Lara123-pg" rel="noreferrer" target="_blank">Lara Fernanda</a>.
            </div>
        </div>
    );
}