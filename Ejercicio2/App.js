import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ImageBackground } from 'react-native';


const fondo = {URL: "https://i.pinimg.com/564x/97/78/ba/9778ba6cac04adadc8edfaa2e00c3f87.jpg"};

const DATA = [
 {
 id: '1',
 title: 'Mercurio',
 descripcion: 'Planeta mas proximo al Sol',
 src:require('./src/mercurio.jpg'),
 },
 {
 id: '2',
 title: 'Venus',
 descripcion: 'Segundo planeta mas proximo al Sol',
 src: require('./src/venus.jpg'),
 },
 {
 id: '3',
 title: 'La Tierra',
 descripcion: 'Tercer planeta mas proximo al Sol',
 src:require('./src/tierra.jpg'),
 },
 {
 id: '4',
 title: 'Estacion Espacial Internacional',
 descripcion: 'Estacion espacial situada en la orbita',
 src:require('./src/estacion.jpg'),
 },
 {
 id: '5',
 title: 'Luna',
 descripcion: 'El unico satelite natural de la Tierra',
 src:require('./src/luna.jpg'),
 },
 {
 id: '6',
 title: 'Marte',
 descripcion: 'Cuarto planeta mas proximo al Sol',
 src:require('./src/marte.jpg'),
 },
{
 id: '7',
 title: 'Ceres',
 descripcion: 'Planeta enano situado entre Marte y Jupiter',
 src:require('./src/ceres.jpg'),
 },
 {
 id: '8',
 title: 'io',
 descripcion: 'El mas interior de los cuatro satelites galileanos de Jupiter',
 src:require('./src/io.jpg'),
 },
{
 id: '9',
 title: 'Europa',
 descripcion: 'El mas pequeño de los cuatro satelites galileanos ',
 src:require('./src/europa.jpg'),
 },
 ];

 const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
  },
  item: {
  padding: 0,
  marginVertical: 2,
  marginHorizontal: 30, 
  },
  title: { 
  textAlign:'center',
  color: 'white', 
  },
  maxtitle: { 
   textAlign:'center',
   color: 'white', 
   fontSize:24,  
   },
  img:{
    width:50,
    height:50,
    borderWidth:2,
    borderColor: 'black',
    resizeMode: 'contain',
    margin:0
  },
  descripcion: {
   textAlign:'center',
    fontFamily: 'Times New Roman',   
    color: 'white'
  }, 
  
 });

const Item = ({ title, descripcion, img }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Text style={styles.descripcion}>{descripcion}</Text>
 <Image style={styles.img} source={img} />
 </View>
 );
 
export default function App() {
  const renderItem = ({ item }) => (
  <ImageBackground source= {fondo}>
 <Item title={item.title} descripcion={item.descripcion} img={item.src} />
 </ImageBackground>
 );

 return (
  <>  
 <SafeAreaView style={styles.container}>  
 <Text style={styles.maxtitle}> El Espacio</Text>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 </>
 );
}

