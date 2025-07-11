import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const MyFruitDetailScreen = () => {
    const route = useRoute();
    const { fruit } = route.params;

    return (
        <ImageBackground
            source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} // Подставь нужный путь
            style={styles.container}
        >
            <Text style={styles.title}>MY FRUIT COLLECTION</Text>

            <Image source={fruit.image} style={styles.mainImage} />

            <Text style={styles.name}>{fruit.name}</Text>

            <View style={styles.tabs}>
                <View
                    style={[
                        styles.tab,
                        fruit.category === 'tried' ? styles.activeTab : {},
                    ]}
                >
                    <Text style={styles.tabText}>Have tried</Text>
                </View>
                <View
                    style={[
                        styles.tab,
                        fruit.category === 'wishlist' ? styles.activeTab : {},
                    ]}
                >
                    <Text style={styles.tabText}>Want to try</Text>
                </View>
            </View>

            <View style={styles.rating}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <Text key={i} style={[styles.star, fruit.rating >= i && styles.filledStar]}>
                        ★
                    </Text>
                ))}
            </View>

            <Text style={styles.label}>Experience</Text>
            <View style={styles.experienceBox}>
                <Text style={styles.experienceText}>{fruit.experience}</Text>
            </View>

            {fruit.extraImage && (
                <Image source={fruit.extraImage} style={styles.extraImage} />
            )}

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

            <View style={styles.commentBox}>
                <Text style={styles.commentText}>
                    “You again with the bananas?{'\n'}
                    Either you're a monkey... or{'\n'}
                    onto something suspicious!”
                </Text>
                <Text style={styles.emoji}>🃏</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 50,
    },
    mainImage: {
        height: 140,
        width: '100%',
        borderRadius: 20,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        color: '#facc15',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 12,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#fcd34d',
    },
    tabText: {
        fontWeight: '600',
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 12,
    },
    star: {
        fontSize: 30,
        color: '#aaa',
        marginHorizontal: 4,
    },
    filledStar: {
        color: '#e91e63',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 4,
    },
    experienceBox: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    experienceText: {
        color: '#fff',
        fontSize: 14,
    },
    extraImage: {
        width: '100%',
        height: 100,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'cover',
    },
    saveButton: {
        backgroundColor: '#f0c',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    commentBox: {
        backgroundColor: '#facc15',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
    },
    commentText: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#111',
        marginBottom: 4,
    },
    emoji: {
        fontSize: 24,
    },
});


export default MyFruitDetailScreen;
