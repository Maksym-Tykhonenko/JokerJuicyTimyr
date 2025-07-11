// App.js
import React, { useState } from 'react';
import {ImageBackground, View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const backgroundImage = require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png'); // замените на ваш фон

const questions = [
    {
        question: 'Weekend plan?',
        answers: ['Volcano hike', 'Sock sorting', 'Rooftop dance', 'Tree nap'],
        correct: 2,
    },
    {
        question: 'Line cutter?',
        answers: ['Offer salad', 'Smile, plot', '“Back off, juicy!”', 'Join them'],
        correct: 2,
    },
    {
        question: 'Drama reaction?',
        answers: ['Add juice', 'Roll away', 'Pop!', 'Go banana'],
        correct: 1,
    },
    {
        question: 'Weather?',
        answers: ['Smoothie fog', 'Full sun', 'Tropical rain', 'Rainbow day'],
        correct: 2,
    },
    {
        question: 'Superpower?',
        answers: ['Sweeten haters', 'Fruitporting', 'Hypno scent', 'Vitamin burst'],
        correct: 2,
    },
    {
        question: 'In the group?',
        answers: ['Snack thief', 'Joke freak', 'Always late', 'Forgets invites'],
        correct: 1,
    },
    {
        question: 'Accessory?',
        answers: ['Pineapple crown', 'Cherry shades', 'Banana socks', 'Lemon purse'],
        correct: 1,
    },
    {
        question: 'Sound?',
        answers: ['Splurt!', 'Crunch!', 'ZING!', 'Mmm...'],
        correct: 2,
    },
    {
        question: 'Motto?',
        answers: ['Stay juicy', 'No peel', 'I squirted', 'Grape me not'],
        correct: 0,
    },
    {
        question: 'Mystery fruit?',
        answers: ['DNA test', 'Poke & run', 'Bite first', 'Ask sign'],
        correct: 2,
    },
];

export default function GameScreen() {
    const [step, setStep] = useState('start'); // 'start', 'quiz', 'result'
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);

    const startQuiz = () => setStep('quiz');

    const selectAnswer = (index) => {
        const updatedAnswers = [...answers, index];
        if (current + 1 < questions.length) {
            setAnswers(updatedAnswers);
            setCurrent(current + 1);
        } else {
            setAnswers(updatedAnswers);
            setStep('result');
        }
    };

    const restart = () => {
        setStep('start');
        setAnswers([]);
        setCurrent(0);
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            {step === 'start' && (
                <View style={styles.centered}>
                    <Text style={styles.title}>QUIZ</Text>
                    <Image source={require('../assets/img/c3d9edab83454c883fc5ab9c59f52b3a80e3fb6c.png')} style={{width:'100%', height:'60%'}}/>
                    <TouchableOpacity style={styles.button} onPress={startQuiz}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            )}

            {step === 'quiz' && (
                <View style={styles.quizContainer}>
                    <Text style={styles.step}>{`${current + 1}/${questions.length}`}</Text>
                    <Text style={styles.question}>{questions[current].question}</Text>
                    {questions[current].answers.map((answer, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={[
                                styles.option,
                                answers[current] === idx && styles.selectedOption,
                            ]}
                            onPress={() => selectAnswer(idx)}
                        >
                            <Text style={styles.optionText}>{`${idx + 1}. ${answer}`}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            {step === 'result' && (
                <View style={styles.centered}>
                    <Text style={styles.resultText}>You picked:</Text>
                    {answers.map((ans, idx) => (
                        <Text key={idx} style={styles.answerLine}>
                            Q{idx + 1}: {questions[idx].answers[ans]} {ans === questions[idx].correct ? '✅' : '❌'}
                        </Text>
                    ))}
                    <TouchableOpacity style={styles.button} onPress={restart}>
                        <Text style={styles.buttonText}>Restart</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        padding: 20,
        justifyContent: 'center',
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    quizContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 48,
        color: 'yellow',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#ff0080',
        padding: 15,
        borderRadius: 30,
        marginTop: 30,
        paddingHorizontal: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    step: {
        fontSize: 24,
        color: 'yellow',
        marginBottom: 10,
    },
    question: {
        fontSize: 20,
        color: 'lime',
        marginBottom: 20,
    },
    option: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 25,
    },
    selectedOption: {
        backgroundColor: 'blueviolet',
    },
    optionText: {
        color: 'orange',
        fontSize: 18,
    },
    resultText: {
        fontSize: 28,
        color: 'white',
        marginBottom: 20,
    },
    answerLine: {
        color: 'white',
        fontSize: 18,
        marginVertical: 5,
    },
});
