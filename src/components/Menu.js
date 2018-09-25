import React, {Component} from 'react'
import{
	Dimensions, StyleSheet, View, Image, Text, ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'

const {width, height}= Dimensions.get('window')

class Menu extends Component{
	render(){
		return (
			<View style={styles.menu}>
				<View style={styles.avatarContainer}>
					<View style={styles.avatarImage}>
						<Image 
							style= {styles.avatar}
							source={require('../images/usuario.jpg')}
						/>
						<Text style= {styles.text}> Kevin </Text>
					</View>
					<Icon
						name="exchange"
						color="white"
						size= {25}
					/>
				</View>
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.textWithIcon}>
						<View style={styles.withIcon}>
							<Icon
								style={styles.iconWithText}
								name="group"
								color="white"
								size={18}
							/>
							<Text style={styles.text}> Noticias</Text>
						</View>
						<Icon
							style={styles.rightIcon}
							name= "angle-right"
							color= "white"
							size= {22}
						/>
					</View>
					<View style={styles.textWithIcon}>
						<View style={styles.withIcon}>
							<Icon
								style={styles.iconWithText}
								name="newspaper-o"
								color="white"
								size={18}
							/>
							<Text style={styles.text}> Coberturas</Text>
						</View>
						<Icon
							style={styles.rightIcon}
							name= "angle-right"
							color= "white"
							size= {22}
						/>
					</View>
					<View style={[styles.items, styles.itemSelected]}>
						<Text style={styles.text}>Inicio</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Información</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Eventos</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Videos y fotos</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Comunidad</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Notas</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Biblia</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Instagram Feed</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Notas</Text>
					</View>
					<View style={styles.noSelectedItems}>
						<Text style={styles.text}>Contactos</Text>
					</View>
				</ScrollView>
			</View>
			)
	}
}
	

	const styles= StyleSheet.create({
		menu: {
			flex:1, 
			width: width,
			height: height,
			backgroundColor: "#17202A"
		},
		avatarContainer:{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: width/2 + 50,
			borderColor: '#CCD1D1', 
			borderBottomWidth: 3,
			paddingHorizontal: 20,
			paddingVertical: 20
		},
		avatar:{
			width: 40, height: 35,
			marginRight: 20
		}, 
		avatarImage: {
			flexDirection: 'row',
			alignItems: 'center'
		}, 
		text: {
			color: '#f5f5dc',
			fontSize: 13
		},
		textWithIcon: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: 15,
			borderColor: '#000',
			borderBottomWidth: 3
		},
		withIcon: {
			flexDirection: 'row',
			alignItems: 'center'
		}, 
		scrollContainer: {
			width: width/2 + 59
		},
		rightIcon: {
			paddingRight: 20
		}, 
		iconWithText: {
			marginRight: 10, 
			paddingLeft: 20
		},
		items: {
			paddingVertical: 15,
			paddingLeft: 20, 
			marginTop: 5
		}, 
		itemSelected: {
			borderLeftWidth: 5,
			borderColor: '#F2D7D5'
		}, 
		noSelectedItems: {
			paddingVertical: 15,
			paddingLeft: 25,
			marginTop: 5
		}
	})


export default Menu