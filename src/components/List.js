import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';

const imagenes_uno = [
    {
        key: 1,
        name: 'actividad1', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41684332_1739744872789366_4373467194953039872_n.jpg?_nc_cat=0&oh=c6ab59eca3a8ea0378fe648d43d2e65a&oe=5C1E4E9F'
    },
    {
        key: 2,
        name: 'actividad2', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41656725_1739749819455538_134538390258319360_n.png?_nc_cat=0&oh=75d6f5fbcb158c8847307ab85a93c751&oe=5C2566DA'

    },
    {
        key: 3,
        name: 'actividad3', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41729582_1738500289580491_7903203273086074880_n.png?_nc_cat=0&oh=8a8e9d7ba81770ac642092cbc85d3669&oe=5C1D25B0'

    },
     {
        key: 4,
        name: 'actividad4', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41129112_1732840833479770_9089662802917851136_n.png?_nc_cat=0&oh=3a4e2296567d364ab3b58e851a245701&oe=5C30359B'

    }, 
     {
        key: 5,
        name: 'actividad5', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/40898955_1731027220327798_4076847102699765760_n.jpg?_nc_cat=0&oh=f3b129029dd58e8e198821d228276339&oe=5C255A73'

    }, 
     {
        key: 6,
        name: 'actividad6', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/38020894_1678028295627691_7633986803053101056_n.jpg?_nc_cat=0&oh=1876d07d1c10c502613acd3e47f0057d&oe=5BECC242'

    }

]

const imagenes_dos = [
    {
        key: 1,
        name: 'actividad1', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41684332_1739744872789366_4373467194953039872_n.jpg?_nc_cat=0&oh=c6ab59eca3a8ea0378fe648d43d2e65a&oe=5C1E4E9F'
    },
    {
        key: 2,
        name: 'actividad2', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41656725_1739749819455538_134538390258319360_n.png?_nc_cat=0&oh=75d6f5fbcb158c8847307ab85a93c751&oe=5C2566DA'

    },
    {
        key: 3,
        name: 'actividad3', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41729582_1738500289580491_7903203273086074880_n.png?_nc_cat=0&oh=8a8e9d7ba81770ac642092cbc85d3669&oe=5C1D25B0'

    },
     {
        key: 4,
        name: 'actividad4', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/41129112_1732840833479770_9089662802917851136_n.png?_nc_cat=0&oh=3a4e2296567d364ab3b58e851a245701&oe=5C30359B'

    }, 
     {
        key: 5,
        name: 'actividad5', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/40898955_1731027220327798_4076847102699765760_n.jpg?_nc_cat=0&oh=f3b129029dd58e8e198821d228276339&oe=5C255A73'

    }, 
     {
        key: 6,
        name: 'actividad6', 
        image: 'https://scontent.fgye6-1.fna.fbcdn.net/v/t1.0-9/38020894_1678028295627691_7633986803053101056_n.jpg?_nc_cat=0&oh=1876d07d1c10c502613acd3e47f0057d&oe=5BECC242'

    }

]


 export default class List extends Component{

    _renderItem(item){
        return (
           <View >
            <Image style={{width:120, height:100}} source={{uri: item.image}}/>
            </View>
        )
    
    }

    render() {
      return (
        <View style={{flex: 1}}>
          <View>
              <Text style={styles.text}>Noticias</Text>
              <FlatList
                  horizontal
                  ItemSeparatorComponent={() => <View style={{width: 5}} />}
                  renderItem= {({item}) => this._renderItem(item)}
                  data={imagenes_uno}
            
               />
           </View>
           <View>
              <Text style={styles.text}>Anuncios</Text>
              <FlatList
                  horizontal
                  ItemSeparatorComponent={() => <View style={{width: 5}} />}
                  renderItem= {({item}) => this._renderItem(item)}
                  data={imagenes_dos}
            
               />
           </View>
        </View>  
      )
    }
  }

  const styles= StyleSheet.create({
      text: {
          color: 'white'
      }
  })
