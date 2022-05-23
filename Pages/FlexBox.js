import React from 'react'
import {View, Text} from 'react-native'

const FlexBox = props => {
    return (
        <View style={{flexDirection:'row', justifyContent:'flex-start', width:'80%', height:200, alignItems:'stretch'}}>
                <View style={{backgroundColor:'red', width:100, alignItems:'center', justifyContent:'center'}}>
                    <Text>1</Text>
                </View>
                <View style={{backgroundColor:'blue'}}>
                    <Text>2</Text>
                </View>
                <View style={{backgroundColor:'green'}}>
                    <Text>3</Text>
                </View>
        </View>
    )
}

export default FlexBox;