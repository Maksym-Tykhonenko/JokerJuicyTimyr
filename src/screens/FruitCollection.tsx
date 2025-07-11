import React, { useState } from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';


const FruitCollection = ({navigation}) => {
    const [activeTab, setActiveTab] = useState<'tried' | 'wishlist'>('tried');

    const FruitCard = ({ name, image, fruit }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('MyFruitDetailScreen', { fruit })}}>
            <ImageBackground source={image} style={styles.card} imageStyle={styles.imageBackground}>
                <View style={styles.cardInner}>
                    <Text style={styles.fruitName}>{name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    const triedFruits = useSelector((state) => state.triedFruits);
    const wishlistFruits = useSelector((state) => state.wishlistFruits);

    const fruits = activeTab === 'tried' ? triedFruits : wishlistFruits;

    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.container}>
            <Text style={styles.title}>MY FRUIT COLLECTION</Text>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'tried' && styles.activeTab]}
                    onPress={() => setActiveTab('tried')}>
                    <Text style={styles.tabText}>Have tried</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'wishlist' && styles.activeTab]}
                    onPress={() => setActiveTab('wishlist')}>
                    <Text style={styles.tabText}>Want to try</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={fruits}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <FruitCard name={item.name} image={item.image} fruit={item}/>
                )}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddFruitScreen')}>
                <Text style={styles.addButtonText}>+ Add taste</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default FruitCollection;


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#f90', marginBottom: 16, marginTop: 30 },
    tabs: { flexDirection: 'row', justifyContent: 'center', marginBottom: 16 },
    tab: { padding: 10, marginHorizontal: 5, borderRadius: 20, backgroundColor: '#ddd' },
    activeTab: { backgroundColor: '#fcd34d' },
    tabText: { fontSize: 16 },
    card: {
        alignItems: 'center',
        backgroundColor: '#fefce8',
        borderRadius: 16,
        marginBottom: 16,
        padding: 16,
    },
    image: { width: 120, height: 120, resizeMode: 'contain' },
    fruitName: { fontSize: 16, marginTop: 8, color: '#7c3aed' },
    addButton: {
        backgroundColor: '#22c55e',
        padding: 14,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 100,
    },
    addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

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
