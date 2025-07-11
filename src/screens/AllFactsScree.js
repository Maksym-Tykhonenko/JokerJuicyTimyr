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

const FruitCard = ({ fruit }) => (
    <View style={styles.card} >
        <View style={styles.tagTopContainer}>
           <Image style={{width: 50, height: 50}} source={require('../assets/img/b973b02331400b8ac8a4a1579505f6b35719b320.png')} />
        </View>

        <View style={styles.cardInner}>
            <Text style={styles.fruitName}>{fruit}</Text>
        </View>

        <View style={styles.tagBottomContainer}>
            <Image style={{width: 50, height: 50}} source={require('../assets/img/b973b02331400b8ac8a4a1579505f6b35719b320.png')} />
        </View>
    </View>
);

export default function AllFactsScree({navigation, route}) {
    const {fruit} = route.params;
    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.background} resizeMode="cover">
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>FRUIT ENCYCLOPAEDIA</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                {fruit.factts.map((fact, index) => (
                    <FruitCard key={index} fruit={fact} />
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
        height: 180,
        margin: 10,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#647BFF',
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
