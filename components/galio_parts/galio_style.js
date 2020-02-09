import {StyleSheet,Dimensions} from 'react-native'
import theme from './theme'

const {height,width} = Dimensions.get('screen');
//handle teh appearance for our app

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.SIZES.BASE * 0.3,
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: theme.COLORS.WHITE,
      },
      input: {
        alignSelf: 'center',
        width: width * 0.89,
        borderBottomColor: theme.COLORS.BLACK,
        borderWidth: theme.SIZES.BASE * 0.04,
        borderRadius: 8,
        paddingHorizontal: 0,
      }
})

export default styles