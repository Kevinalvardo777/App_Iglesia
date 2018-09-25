import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import RF from "react-native-responsive-fontsize"

const Header= props => (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => props.toggle()}>
				<Icon
					name="bars"
					color="white"
					size={25}
				/>
			</TouchableWithoutFeedback>
			<View  style={styles.container2} >
			<Image style={styles.enciende_logo} source={require('../images/enciende_logo.png')}  />
			<Text style={{ fontSize: RF(3.5), fontStyle: 'italic', color: 'white'}}>
             ENCIENDE
        	</Text>
        	</View>
			<Icon
				name= "search"
				color= "white"
				size= {18}
			/>
		</View>
		
)

const styles= StyleSheet.create({
	container: {
		flexDirection: 'row', 
		height: 80,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'black',
		marginHorizontal: 15
	},
	container2: {
		flexDirection: 'row', 
		height: 80,
		alignItems: 'center',
		
	},
	enciende_logo:{
		width: 40, height: 35

	} 

})
 
export default Header