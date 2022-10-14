import React, {useState, useEffect, useContext} from "react"
import { StyleSheet,Image,TouchableOpacity,ScrollView,SafeAreaView, Text, View } from 'react-native';


const ProfileScreen = ({navigation}) => {
   

const ProfileScreen =()=>{
    const {user,logout} = useContext(AuthContext)

}


return(

<View style={styles.container}>

    <SafeAreaView>
        <ScrollView>
    <Image source={require('../assets/kk.jpg')} style={{height:100,width:130, marginLeft:20}} />
    
</ScrollView>
    </SafeAreaView>
 

 <Text style={styles.UserName}>
    Kevin Mahlaule

 </Text>



    
    
</View>
);

}

export default ProfileScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
