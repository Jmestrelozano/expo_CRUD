import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const Barra = ({navigation,route}) => {

    const handlePress = () =>{
        console.log("Vamos a Crear")
        navigation.navigate("Nuevo Cliente")
    }

    return (
        <View>
            <Button icon="plus" color="#fff" onPress={()=>handlePress() } >
            Cliente
            </Button>
        </View>
    )
}

export default Barra

const styles = StyleSheet.create({})
