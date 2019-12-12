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
  ShadowPropTypesIOS,
  TouchableOpacity,
 
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Moment from 'moment'; 

const ScheduleScreen = (props) => {
  const [ performances, setPerformances ] = useState([]);
  const [artist,setArtist] = useState([]);
  var [searchText, setSearchText] = useState('');
  var [sortcount, setsortcount] = useState(1);
  var [filteredData, setFilteredData] = useState([]);
  var [temparray,settemparray] = useState(performances);
  const [tempperformances,setempperformances]= useState([]);
  var array_schedule 
  var artist1 = {};
  var dict = []; // create an empty array



  
function getcompletedata(data1){
//console.log(data.artistId);

  fetch('https://thawing-hollows-21222.herokuapp.com/artists')
  .then(res => res.json())
  .then(({ data }) => {
    
    setArtist(data); 
   // console.log(data.name); 
    
  });
  
  //console.log(artist.length);
  
 // data1[i].artistId=data.name;
  
 


//console.log('https://thawing-hollows-21222.herokuapp.com/artists/'+data.artistId);

}

  useEffect(() => {
    if (performances.length === 0) {
      fetch('https://thawing-hollows-21222.herokuapp.com/performances')
        .then(res => res.json())
        .then(({ data }) => {
          setPerformances(data);
          getcompletedata(data);
          
        });

        
    }
  });

  loaddata();
if(performances.length==0){
  
}
  //setState(state);
  if (performances.length > 0){

  // this.state.data = performances;
  }

  search = (text) => {
    //console.log(state.searchText,searchText);
    // this.setState({searchText: searchText});
    //console.log(state.searchText);
    if(text==""){
      setPerformances(performances)

    }else{
  
    let filtered = performances.filter(function (item) {
      return item.artistId.toLowerCase().includes(searchText.toLowerCase());
    });
  
    setFilteredData(filtered);
  }
    setSearchText(text);
    
  };
  //getcompletedata(performances)
  //setPerformances(performances)

  function loaddata(){
    var performances1 =performances;
    if(artist.length!=0){
      for(var j =0;j<performances1.length;j++){
        for(var k=0;k<artist.length;k++){
        if(performances1[j].artistId==artist[k].id){
          performances1[j].artistId=artist[k].name
          if(performances1[j].stageId==1){
            performances1[j].stageId="Main Stage"
          }
          else{
            performances1[j].stageId="Up and Coming"
          }
        }
        }
      }
     // setPerformances(performances);
    }
    
   // console.log(performances1); 
  }

  sortstage = () => {
    
    var temp =[];
    var temp1 =[];
   // console.log(temparray.length);
    if(sortcount==1){
      settemparray(performances)
    }
    
    for(var i=0;i<temparray.length;i++){
      
      if(temparray[i].stageId=="Main Stage"){
        temp.push(temparray[i]);
       // console.log(temparray[i].stageId);
      }
      else{
        temp1.push(temparray[i]);
        //console.log(temparray[i].stageId);
      }

    }
    //const interest = [...temp, ...temp1];
    //console.log(interest.length)

    if(sortcount%3==0){
      setPerformances(temparray)
      console.log(temparray.length)

    }
    if(sortcount%3==1){
      setPerformances(temp)
      console.log(temp.length)

    }
    if(sortcount%3==2){
      setPerformances(temp1)
      console.log(temp1.length)

    }
    setsortcount(sortcount+1);
    //console.log(temp1.length)
   // temp = temp.push(...temp1);
   // console.log(temp.length)
   // setPerformances(interest);
}


sortdate = () => {
  var now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  var temparray1=performances;
  var temparray2=[];
  var min_day=0;
  var min_index=0;
  
  var sortedObj =  performances.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  console.log(sortedObj);
  setPerformances(sortedObj);
}

  /*<SearchBar        
      placeholder="Type Here..."        
      lightTheme        
      round        
      onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}             
    /> */
  

  return (
    
    <View style={{ flex: 1 }}>
      
      <SearchBar
  round={true}
  placeholder="Search by Artist"
  autoCapitalize='none'
  autoCorrect={false}
  onChangeText={ search }
  value={ searchText }
  containerStyle={{backgroundColor:"#0a0a09"}}
  inputStyle={{backgroundColor:"#0a0a09",color:"#e07204"}}
  leftIconContainerStyle={{backgroundColor:"#0a0a09"}}
  inputContainerStyle={{backgroundColor:"#0a0a09"}}
  searchIcon={{color:"#e07204"}}
  clearIcon={{color:"#e07204"}}
/>
<View style={{padding:10,flexDirection:'row',backgroundColor:"#0a0a09"}}>
<Button
         onPress={ ()=>{ this.sortstage()}}
         title = "Sort By Stage"
         color = "black"
         style={{borderRadius:30,color:'red',fontSize:25}}
         
      />
<Text style={{ color: '#e07204',fontSize:25 }}>Schedules</Text>
<Button
         onPress={ ()=>{ this.sortdate()}}
         title = "Sort By Date"
         color = "black"
         
         style={{borderRadius:30}}
         
      />
</View>
      <FlatList
        data={ filteredData.length ? filteredData : performances } 
        keyExtractor={ x => `${x.id}` }
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:"#0a0a09",borderWidth:10,borderColor:"red"}}>
      <View style={{ backgroundColor: "#0a0a09", borderRadius: 10, overflow: "hidden" }}>
      
        <View style={{width: 600,alignItems:"center" }}>
          <Text style={{ color: '#e07204',paddingLeft:20, paddingTop: 5,fontSize:50 }}>{item.date}</Text>
          <Text style={{ color: '#e07204',paddingLeft:20, paddingTop: 5,fontSize:50 }}>{item.time}</Text>
          <View style={{padding:10,flexDirection:'row',backgroundColor:"#0a0a09"}}>
          <Image
              source={{ uri: 'https://besthqwallpapers.com/Uploads/24-8-2019/102700/thumb2-dj-marshmello-4k-minimal-music-stars-black-background.jpg' }}
              style={{
                
                height: 30,
                width: 30,
                paddingTop:15
              }}
            />
          <Text style={{ color: '#e07204',paddingLeft:5, paddingTop: 5,fontSize:30 }}>{item.artistId}</Text>
          
          </View>
          <Text style={{ color: '#e07204',paddingLeft:5, paddingTop: 5,fontSize:15 }}>{item.stageId}</Text>
          

          <View style={{flexDirection: 'row',borderRadius:9,padding:10 }} >
            <View style={{ width:100,flexDirection: 'row' }}>
          
    </View>
   

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

ScheduleScreen.navigationOptions = {
  title: 'Schedule',
  headerStyle: {
    backgroundColor: '#0a0a09',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color:"#e07204",
  }
};

export default ScheduleScreen;

