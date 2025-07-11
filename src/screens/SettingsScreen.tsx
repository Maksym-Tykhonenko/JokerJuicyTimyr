import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Linking, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import {clearTriedFruits2} from "../redux/slices/wishlistFruitsSlice.ts";
import {clearTriedFruits} from "../redux/slices/triedFruitsSlice.ts";

export default function SettingsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        Alert.alert('Delete all?', 'Are you sure you want to delete all notes and gallery?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Yes', onPress: () => {
                    dispatch(clearTriedFruits2())
                    dispatch(clearTriedFruits())
                }},
        ]);
    };

    return (
        <ImageBackground source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} style={styles.container} resizeMode="cover">
            <Text style={styles.title}>Settings</Text>

            <TouchableOpacity style={styles.itemRow} onPress={handleDeleteAll}>
                <Text style={styles.itemText}>Delete all notes and gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} onPress={() => Linking.openURL('https://www.termsfeed.com/live/9c4c14f3-2da4-42db-87df-48ab38465753')}>
                <Text style={styles.itemText}>Privacy Policy</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('AboutDeveloperScreen')}>
                <Text style={styles.itemText}>About developer</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb3e6',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#FBA100',
    },
    itemRow: {
        backgroundColor: '#FF56A8',
        borderRadius: 35,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 16,
        color: '#ffff',
    },
    arrow: {
        fontSize: 22,
        color: '#3C3C434D',
    },
});
