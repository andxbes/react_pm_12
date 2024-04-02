import { useCallback, useRef, useState } from "react";
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prev) => {
                return [...prev, selectedAnswer];
            });
        },
        []
    );

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsCompleted) {
        return (
            <div id="summary">
                <h2>Quiz completed</h2>
                <img src={quizCompleteImg} />
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}//Remove  QuestionTimer every next quiz render 
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
};
