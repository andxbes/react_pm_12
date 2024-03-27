import { useEffect, useState } from "react";
const STEP_INTERVAL = 100;
export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(
        () => {
            console.log('Setting timeout');

            const timer = setTimeout(onTimeout, timeout);
            return () => {
                clearTimeout(timer);
            }
        }, [timeout, onTimeout]);
    useEffect(
        () => {
            console.log('Setting interval');
            const interval = setInterval(() => {
                setRemainingTime((prev) => prev - STEP_INTERVAL);
            }, STEP_INTERVAL);
            return () => {
                clearInterval(interval);
            }
        }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
};
