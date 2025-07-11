import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {addTriedFruit} from '../redux/slices/triedFruitsSlice';
import {addWishlistFruit} from '../redux/slices/wishlistFruitsSlice';
import {useDispatch} from 'react-redux';

const AddFruitScreen = ({navigation}) => {
    const [activeTab, setActiveTab] = useState('tried');
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [rating, setRating] = useState(0);
    const [mainImage, setMainImage] = useState(null);
    const [extraImage, setExtraImage] = useState(null);

    const selectImage = async (setter) => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (!result.didCancel && result.assets && result.assets.length > 0) {
            setter({ uri: result.assets[0].uri });
        }
    };

    const dispatch = useDispatch();

    const handleSave = () => {
        const fruitData = {
            id: Date.now().toString(), // обязательно нужен уникальный id
            name,
            experience,
            rating,
            image: mainImage,
        };

        if (activeTab === 'tried') {
            dispatch(addTriedFruit(fruitData));
        } else {
            dispatch(addWishlistFruit(fruitData));
        }

        // Очистить поля после добавления
        setName('');
        setExperience('');
        setRating(0);
        setMainImage(null);
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require('../assets/img/d1be91a81420405a19be8e8c9266e96ee305f10a.png')} // Подставь свой путь
            style={styles.container}
        >
            <Text style={styles.title}>MY FRUIT COLLECTION</Text>

            <TouchableOpacity onPress={() => selectImage(setMainImage)} style={styles.imageBox}>
                {mainImage ? (
                    <Image source={mainImage} style={styles.image} />
                ) : (
                    <Text style={styles.imagePlaceholder}>Add picture</Text>
                )}
            </TouchableOpacity>

            <Text style={styles.label}>Enter Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter fruit name"
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={setName}
            />

            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'tried' && styles.activeTab]}
                    onPress={() => setActiveTab('tried')}
                >
                    <Text style={styles.tabText}>Have tried</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'wishlist' && styles.activeTab]}
                    onPress={() => setActiveTab('wishlist')}
                >
                    <Text style={styles.tabText}>Want to try</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rating}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <TouchableOpacity key={i} onPress={() => setRating(i)}>
                        <Text style={[styles.star, rating >= i && styles.filledStar]}>★</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Experience</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Add text"
                placeholderTextColor="#aaa"
                multiline
                value={experience}
                onChangeText={setExperience}
            />


            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default AddFruitScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        resizeMode: 'cover',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 50,
    },
    imageBox: {
        backgroundColor: '#ccc',
        height: 140,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    imagePlaceholder: {
        color: '#666',
        fontSize: 16,
    },
    label: {
        color: 'limegreen',
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 12,
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 4,
        backgroundColor: '#eee',
        borderRadius: 20,
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
    textArea: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 12,
    },
    saveButton: {
        backgroundColor: '#f0c',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
