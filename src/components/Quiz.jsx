import { useCallback, useState } from "react";
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz(params) {
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
        });
    });

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsCompleted) {
        return (
            <div id="summary">
                <h2>Quiz completed</h2>
                <img src={quizCompleteImg} />
            </div>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key={activeQuestionIndex}//Remove  QuestionTimer every next quiz render 
                    timeout={10000}
                    onTimeout={() => handleSkipAnswer}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => { handleSelectAnswer(answer) }}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
