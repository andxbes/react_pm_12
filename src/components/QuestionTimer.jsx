import { useEffect, useState } from "react";
const STEP_INTERVAL = 100;
export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(
        () => {
            const timer = setTimeout(onTimeout, timeout);
            return () => {
                clearTimeout(timer);
            }
        }, [timeout, onTimeout]);
    useEffect(
        () => {
            const interval = setInterval(() => {
                setRemainingTime((prev) => prev - STEP_INTERVAL);
            }, STEP_INTERVAL);
            return () => {
                clearInterval(interval);
            }
        }, []);

    return (
        <progress
            id="question-time"
            max={timeout}
            value={remainingTime}
            className={mode} />
    );
};
