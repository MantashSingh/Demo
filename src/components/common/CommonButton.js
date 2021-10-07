import React from 'react'
import { View, Text  ,StyleSheet ,TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import { moderateScaleVertical } from '../../styles/responsiveSize'

export default function CommonButton( {
    string,
    onPress,
    buttonColor
}) {
    return (
        <View>
            <TouchableOpacity style={{...styles.buttonContiner , backgroundColor:buttonColor}} 
            onPress={onPress}>

                <Text style={styles.string}>
                    {string}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContiner:{
    height:moderateScaleVertical(56),
    borderRadius:16,
    marginVertical:moderateScaleVertical(10),
    },
    string:{
        ...commonStyles.fontSizeMedium16,
        textAlign:"center",
        marginTop:"auto",
        marginBottom:"auto",  
        color:colors.white      
    }
})
