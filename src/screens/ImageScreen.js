import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () =>{
    return <View>
        <ImageDetail title = "Forrest" imageSource ={require('../../assets/forest.jpg')} score = {10}/>
        <ImageDetail title = "Beach" imageSource ={require('../../assets/beach.jpg')} score = {10}/>
        <ImageDetail title = "Moutain" imageSource ={require('../../assets/mountain.jpg')} score = {10}/>
    </View>
}
const styles = StyleSheet.create({

});

export default ImageScreen;