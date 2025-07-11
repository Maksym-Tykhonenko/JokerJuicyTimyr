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
        name: 'Blackberry',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/00d41eac4e6e7c93d8a41622572856d560a86646.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
    {
        name: 'Orange',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/1f6eb2b433ace6869aff6d9cd16695cf96066d9f.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
    {
        name: 'Lemon',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/981d6cbd831ec5bffa42cf32de611dc8b1700c0d.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
    {
        name: 'Watermelon',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/f9b1fa4a91bc24e7ab356d78e50a6ea719168a6c.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
    {
        name: 'Kiwi',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/38959a6e20c817a99015b98b5871da402d04cefb.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
    {
        name: 'Cherry',
        tags: ['Bold & Deep', 'Mysterious & Cool'],
        image: require('../assets/img/ab0cdd7b5bf40e799352d5192992fdce9dade799.png'),
        description: {
            taste: 'Sweet with a slightly tart kick.',
            season: 'Summer to early autumn.',
            origin: 'Native to Europe and North America.',
            fact: 'Careful! These little gems may look sweet, but they bite back with tang!',
        },
    },
];

const FruitCard = ({ name, tags, image }) => (
    <ImageBackground source={image} style={styles.card} imageStyle={styles.imageBackground}>
        <View style={styles.tagTopContainer}>
            <Text style={styles.tagTop}>{tags[0]}</Text>
        </View>

        <View style={styles.cardInner}>
            <Text style={styles.fruitName}>{name}</Text>
        </View>

        <View style={styles.tagBottomContainer}>
            <Text style={styles.tagBottom}>{tags[1]}</Text>
        </View>
    </ImageBackground>
);

export default function App({navigation}) {
    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.background} resizeMode="cover">
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>FRUIT ENCYCLOPAEDIA</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                {fruits.map((fruit, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('FruitDetail', { fruit })}
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
