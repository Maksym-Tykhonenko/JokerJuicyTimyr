import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, ImageBackground} from 'react-native';

const AboutDeveloperScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={{flex: 1}} resizeMode="cover">
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/img/b973b02331400b8ac8a4a1579505f6b35719b320.png')} style={styles.icon} />
                <Text style={styles.title}>About Developer</Text>
            </TouchableOpacity>

            <Text style={styles.description}>
                This app was created just for fun and to practice React Native skills. It combines playful design with hands-on coding to explore mobile UI ideas and features.
            </Text>

            <Text style={styles.detail}>Email: JokerJuicy@gmail.com</Text>
            <Text style={styles.detail}>Country: USA</Text>

            <Text style={styles.taste}>React Native, JavaScript, TypeScript, Firebase, REST APIs</Text>

            <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>


            <View style={{ marginBottom: 50 }} />
        </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 60,
    },
    title: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
    },
    icon: {
        width: 54,
        height: 54,
        marginRight: 8,
    },
    image: {
        width: '100%',
        // height: 200,
        borderRadius: 12,
        marginVertical: 16,
    },
    description: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
        fontSize: 16,
    },
    detail: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    taste: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        marginBottom: 8,
        fontSize: 18,
        color: 'green',
        textAlign: 'center',
    },
    stars: {
        backgroundColor: '#fff26d',
        padding: 10,
        borderRadius: 16,
        fontSize: 22,
        textAlign: 'center',
        color: '#ffcc00',
    },
});

export default AboutDeveloperScreen;
