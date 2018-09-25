import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={180} horizontal={false} autoplay
         onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#00008b', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
          <View style={styles.slide} /*title={<Text numberOfLines={1}>Predica</Text>}*/>
            <Image resizeMode='stretch' style={styles.image} style={{width: 400, height: 280}} source={require('../images/foto1.jpg')} />
          </View>
           <View style={styles.slide} /*title={<Text numberOfLines={1}>Albanza</Text>}*/>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/foto2.jpg')} />
          </View>
           <View style={styles.slide} /*title={<Text numberOfLines={1}>Adoracion</Text>}*/>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/foto3.jpg')} />
          </View>
          <View style={styles.slide} /*title={<Text numberOfLines={1}>alza manos</Text>}*/>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/foto4.jpg')} />
          </View>
        </Swiper>
      </View>
    )
  }
}