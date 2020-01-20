
import {StyleSheet} from 'react-native'
//handle teh appearance for our app

const styles = StyleSheet.create({
   foodButton:{
    borderRadius: 10,
     marginLeft: 10,
     marginRight: 10, 
     marginBottom: 10,
     backgroundColor:'#03A9F4'
   },
   foodText:{
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight:"bold"
   },
   registerContainer:{
    justifyContent: 'center',
    marginTop: 50,
    padding: 20
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  email: {
    fontSize: 12,
    marginLeft: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewContainer:{
    backgroundColor:'#00ff00'
  },
  /*foodList:{ // user is not valid style property. the deep nested variables r not available
       user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
    }
  */
  headerPart:{
    backgroundColor:'#009966'
  }  
  //end of food list
})


export default styles