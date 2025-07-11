import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

const FruitDetailScreen = ({ route, navigation }) => {
    const { fruit } = route.params;

    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.background}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <Image source={fruit.image} style={styles.image} />
            </View>

            <Text style={styles.title}>{fruit.name}</Text>

            <View style={styles.description}>
                <Text style={styles.text}>Taste: {fruit.description.taste}</Text>
                <Text style={styles.text}>Season: {fruit.description.season}</Text>
                <Text style={styles.text}>Origin: {fruit.description.origin}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😋 Explosive taste</Text>
            </TouchableOpacity>

            <View style={styles.factBox}>
                <Text style={styles.factText}>“{fruit.description.fact}”</Text>
                <Text style={styles.emoji}>🤡</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
    },
    backArrow: {
        fontSize: 28,
        color: 'white',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#5E147D',
        borderRadius: 40,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 130,
        height: 130,
    },
    title: {
        color: '#FFD700',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
        alignSelf: 'center',
    },
    description: {
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    factBox: {
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
    },
    factText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    emoji: {
        fontSize: 28,
    },
});

export default FruitDetailScreen;
