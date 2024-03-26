import logoImg from '../assets/quiz-logo.png'

export default function Header(params) {
    return (
        <header>
            <img src={logoImg} alt="Quiz logo" />
            <h1>React Quiz</h1>
        </header>
    );
};
