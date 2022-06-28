import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';


const Pin = (props) => {

    const [ratio, setRatio] = useState(1);

    const {image, title} = props.pin;
    
    // Image.getSize(image, (width,height) => setRatio(width / height))

    useEffect(() => {
        if(image){
            Image.getSize(image, (width,height) => setRatio(width / height))
        }
    }, [image])

    const onLike = () => {}

    return (
        <View style={styles.pin}>
            <View>
                <Image style={[styles.image, { aspectRatio: ratio }]} source={{uri: image}}/>
                <Pressable onPress={onLike} style={styles.heart}>
                    <AntDesign name={'hearto'} size={20} color={'black'} />
                </Pressable>
            </View>

            <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
    lineHeight: 21,
    color: "#181818"
  },
  image:{
    width: '100%',
    borderRadius: 25,
  }, 
  pin:{
    width: '100%',
    padding: 4
  },
  heart:{
    backgroundColor: '#D3CFD4',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  }
});

export default Pin;