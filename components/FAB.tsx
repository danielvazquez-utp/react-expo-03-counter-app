import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
    label: string,
    position?:'left'|'right',
    onPress?: ()=>void,
    onLongPress?: ()=>void,
}

export default function FAB({ label, onPress, onLongPress, position='right' }:Props) {
    return (
        <Pressable
            onPress={ onPress }
            onLongPress={ onLongPress }
            style={ ({pressed}) => [
                styles.btnCounter, 
                (position=='left')? styles.positionLeft : styles.positionRight,
                pressed ? { opacity: 0.7 } : { opacity: 1.0 }
            ]}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{ label }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnCounter: {
        position: 'absolute',
        bottom: 20,
        // right: 20,
        backgroundColor: '#db5304',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width:0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3
    },
    positionRight : {
        right: 20,
    },
    // Que el estudiante agregue condicional ternario para que dependiendo del atributo "position" el botón se muestre en el posición indicada
    positionLeft : {
        left: 20,
    }
})