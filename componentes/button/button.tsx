import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export function Button(props:Props) {
    return (
        <Pressable onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
button: {
backgroundColor:"#E67A31",
borderRadius:10,
paddingHorizontal:25,
paddingVertical:15
},
buttonText:{
color:"#fff",
fontSize:16,
textAlign:'center'    
}
})