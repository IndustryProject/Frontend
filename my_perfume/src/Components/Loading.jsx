import React from 'react'; 
import "./loading.css";
import {View,Text,StyleSheet} from 'react-native'; 
 
const Loading = () =>{
     return(
          <div className = "loading_div">
               
               <div className = "comment">
               당신의 향수를 분석 중입니다!
               </div>
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
               <div className="spinner-border"  role="status">
               <span className="visually-hidden">Loading...</span>
               </div>

          </div>
     );
          
          

}
// export default function Loading(){     

//     return(

//       <View style={styles.container}>

//            <Text style={styles.title}>준비중입니다...</Text>

//        </View>)

// } 
 

// const styles = StyleSheet.create({     

//     container: {         

// //앱의 배경 색         

//      flex:1,         

//      justifyContent:'center',         

//      alignItems:'center',         

//      backgroundColor: '#fdc453',     

// },     

//      title: {         

//      fontSize:20,         

//      fontWeight:'700'     

// } 

// })

export default Loading;