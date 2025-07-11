import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const fruits = [
    {
        name: 'Truth or Nonsense?',
        factts: [
            'Bananas are slightly radioactive.',
            'Strawberries can scream when picked.',
            'Kiwi once caused a blackout in New York.',
            'Apples float because 25% of their volume is air.'
        ]
    },
    {
        name: 'Fruits in History',
        factts: [
            'Cleopatra used crushed grapes as lip tint.',
            'A pineapple was once rented for parties in 18th-century England.',
            'Napoleon banned cherries after slipping on one.',
            'Julius Caesar wore a grape helmet into battle for "good luck."'
        ]
    },
    {
        name: 'Fruits in Madness',
        factts: [
            'In 2017, someone built a house entirely from watermelons.',
            'Grapes were used as currency at a fruit-only market in Italy.',
            'A man legally changed his name to Mr. Banana.',
            'There’s a cult that worships a giant cosmic mango.',
            'There’s an online dating app exclusively for lemons and limes.',
        ]
    },

];

const FruitCard = ({ name, tags, image }) => (
    <ImageBackground source={require('../assets/img/63a1604be2466696cb7be585811eadd164d89794.png')} style={styles.card} imageStyle={styles.imageBackground}>
        <View style={styles.tagTopContainer}>
            <Text style={styles.tagTop}></Text>
        </View>

        <View style={styles.cardInner}>
            <Text style={styles.fruitName}>{name}</Text>
        </View>

        <View style={styles.tagBottomContainer}>
            <Text style={styles.tagBottom}></Text>
        </View>
    </ImageBackground>
);

export default function FruindFactsScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.background} resizeMode="cover">
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>FRUIT ENCYCLOPAEDIA</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                {fruits.map((fruit, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('AllFactsScree', { fruit })}
                    >
                        <FruitCard {...fruit} />
                    </TouchableOpacity>
                ))}
                <View style={{marginBottom: 100}}/>
            </ScrollView>
        </ImageBackground>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    header: {
        color: 'orange',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    scrollContainer: {
        paddingBottom: 30,
        paddingTop: 50,
    },

    card: {
        height: 280,
        margin: 10,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        padding: 15,
        // backgroundColor: '#fff',
    },

    imageBackground: {
        borderRadius: 90,
        borderWidth: 2,
        borderColor: 'rgb(255,224,0)',
        // opacity: 0.3,
    },

    tagTopContainer: {
        alignItems: 'flex-start',
    },

    tagTop: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 5,
        borderRadius: 10,
        fontSize: 12,
    },

    cardInner: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    fruitName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    tagBottomContainer: {
        alignItems: 'flex-end',
    },

    tagBottom: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 5,
        borderRadius: 10,
        fontSize: 12,
    },
});
