import React, {useEffect, useState} from 'react';
import Timer from "./Timer";

export default function App() {
    const questions = [
        {
            questionText: 'Ե՞րբ է հիմնադրվել Հայաստանի ազգային պոլիտեխնիկական համալսարանը',
            answerOptions: [
                {answerText: '1900', isCorrect: false},
                {answerText: '1920', isCorrect: false},
                {answerText: '1933', isCorrect: true},
                {answerText: '1885', isCorrect: false},
            ],
        },
        {
            questionText: 'Ո՞րն է Լարման չափման միավորը',
            answerOptions: [
                {answerText: 'Ամպեր', isCorrect: false},
                {answerText: 'Վոլտ', isCorrect: true},
                {answerText: 'Վատտ', isCorrect: false},
                {answerText: 'Կուլոն', isCorrect: false},
            ],
        },
        {
            questionText: 'Ի՞նչ է դեկոմպիլյացիան',
            answerOptions: [
                {answerText: 'ցածր մակարդակի լեզվից բարձրմակարդակային լեզվի թարգմանությունը', isCorrect: true},
                {answerText: 'բարձր մակարդակի լեզվից ցածրամակարդային լեզվի թարգմանությունը', isCorrect: false},
                {answerText: 'կոդի արդյունավետությունը բարձրացնելու համար նախատեսված հրաման', isCorrect: false},
                {answerText: 'կոդը տող առ տող ջնջելու համար նախատեսված հրաման', isCorrect: false},
            ],
        },
        {
            questionText: 'Ո՞րը չի համարվում տրամաբանակ տարր',
            answerOptions: [
                {answerText: 'AND', isCorrect: false},
                {answerText: 'OR', isCorrect: false},
                {answerText: 'NOT', isCorrect: false},
                {answerText: 'LOGIC', isCorrect: true},
            ],
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const handleRefreshPage = () => {
        window.location.reload()
    };
    return (
        <>
            {/*<Timer seconds={4} score={score} questions={questions} setCount={setCount}  />*/}
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                        <button onClick={handleRefreshPage}>Start Again</button>

                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Հարց {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button
                                    onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
