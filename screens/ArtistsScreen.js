import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  Linking,
  ListView,
  AsyncStorage
} from 'react-native';



import { SocialIcon } from 'react-native-elements'
import { blue } from 'ansi-colors';
import firebase from 'firebase';







const ArtistsScreen = (props) => {

   navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#0a0a09',
    },
    headerTintColor: '#0a0a09',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  function Card1(){

  }

  function writeUserData(
    id, bio, name, email,facebook,instagram,twitter,website,image
    ){
                      firebase.database().ref('UsersList/').push({
                        id, bio, name, email,facebook,instagram,twitter,website,image
                      }).then((data)=>{
                          //success callback
                          console.log('data ' , data)
                      }).catch((error)=>{
                          //error callback
                          console.log('error ' , error)
                      })
                  }
  // Pravesh
  var favArray = [];
  //var db = openDatabase({ name: 'UserDatabase.db' });
  // Pravesh

  const [ artists, setArtists ] = useState([]);
  const [ dataLoaded, setDataLoaded ] = useState(false);
  var random_images =["https://img.youtube.com/vi/hcDC-Nf5uvI/0.jpg",
                      "https://snworksceo.imgix.net/mnd/186b6d60-1274-468c-a8e8-a4ea765367c4.sized-1000x1000.jpg",
                      "https://www.udiscovermusic.com/wp-content/uploads/2017/11/Neil-Diamond-The-Jazz-Singer-album-cover-web-optimised-820-820x600.jpg",
                       "https://media.npr.org/assets/img/2013/10/23/edmclassical_wide-a8488203c823c5c6389c34c26d5a103c107bcf5c-s800-c85.jpg"]
  
  useEffect(() => {
    if (!dataLoaded) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({ data }) => {
          setArtists(data);
          setDataLoaded(true);
        });
    }
  });
  const handlepress = (link) => {

  }
  const keyExtractor = (item) => {
    return `${ item.id }`;
  }

  return (
    <View style={{ flex: 1 }}>
    <View style={{padding:10,flexDirection:'row',backgroundColor:"#0a0a09"}}>

<Button
         onPress={this._signOutAsync}
         title = "Sign Out"
         color = "black"
         
         style={{borderRadius:30}}
         
      />
</View>
    <FlatList
      data={ artists }
      keyExtractor={ keyExtractor }
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:"#0a0a09",borderWidth:10,borderColor:"red"}}>
            <View style={{ backgroundColor: "#0a0a09", borderRadius: 10, overflow: "hidden" }}>
              <View>
                  <Image
                    source={{ uri: 'https://besthqwallpapers.com/Uploads/19-11-2018/72032/thumb2-marshmello-american-dj-red-smoke-stylish-art-4k.jpg' }}
                    style={{
                      
                      height: 400,
                      width: 600
                    }}
                  />
                </View>
              <View style={{width: 600,alignItems:"center" }}>
                <Text style={{ color: '#e07204',paddingLeft:20, paddingTop: 5,fontSize:50 }}>{item.name}</Text>
                <View style={{flexDirection: 'row',borderRadius:9,padding:10 }} >
                
                <View style={{ width:100,flexDirection: 'row' }}>
                  
                <Button
                     onPress={ ()=>{ Linking.openURL(item.website)}}
                      title = "Go to Website"
                      color = "black"
                      style={{borderRadius:30}} />
                </View>
     
                <SocialIcon                
                  button
                  type='heart'
                  style={{width:40,height:40, marginLeft:25}}
                  iconColor="white"
                  onPress={ ()=>{
                    // Pravesh
                    
                    iconColor="red";
                    
                    writeUserData(item.id, 
                      item.bio, 
                      item.name, 
                      item.email,
                      item.facebook,
                      item.instagram,
                      item.twitter,
                      item.website,
                      item.image)
                    //Pravesh

                   }}
                  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
                />

                <SocialIcon
                  button
                  type='instagram'
                  style={{width:40,height:40}}
                  iconColor="red"
                  onPress={ ()=>{ Linking.openURL(item.instagram)}}
                  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
                />
                <SocialIcon
                  
                  button
                  type='facebook'
                  style={{width:40,height:40}}
                  iconColor="red"
                  onPress={ ()=>{ Linking.openURL(item.facebook)}}
                  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
                />

                <SocialIcon
                  type='twitter'
                  style={{width:40,height:40}}
                  onPress={ ()=>{ Linking.openURL(item.twitter)}}
                  iconColor="red"
                  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
                />

                <SocialIcon
                  type='youtube'
                  style={{width:40,height:40}}
                  onPress={ ()=>{ Linking.openURL(item.twitter)}}
                  iconColor="red"
                  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
                />


      </View>

          </View>
            </View> 
          </View> 
        );
      }}
    />
    </View>
  );
}

export default ArtistsScreen;

ArtistsScreen.navigationOptions = {
  title: 'Artists',
  headerStyle: {
    backgroundColor: '#0a0a09',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color:"#e07204",
  }
};

<Button
         onPress={ ()=>{ this.sortstage()}}
         title = "Favorites"
         color = "black"
         style={{borderRadius:30,color:'red',fontSize:25}}
         
      />
