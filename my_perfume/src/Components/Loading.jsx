import React from 'react'; 
import "./loading.css";
import {View,Text,StyleSheet} from 'react-native'; 
 
const Loading = () =>{
     return(
          <div className = "loading_div">
               <div className= "content">
                    
               <div className = "comment">
               we're analyzing your perfume!
               </div>
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
               <div className="spinner-border" style={{width:'5rem',height:'5rem'}} role="status">
               <span className="visually-hidden">Loading</span>
               </div>
               <div>
                    wait a few seconds!
               </div>
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