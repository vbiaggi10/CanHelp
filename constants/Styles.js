import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
  },
  logoContainer: {
    // flex: 1,
    alignItems: 'center'
    // width: 100,
    // height: 100
  },
  logo: {
    width: 130,
    height: 100,
  },
  form: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginVertical: 30
  },
  inputContainer: {
    paddingVertical: 10,
    // width: 300,
    // paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInfoRight: {
    color: Colors.gray,
    textAlign: 'right'
  },

  text: {
    color: Colors.gray
  },
  textLink: {
    color: Colors.primary,
    fontWeight: 'bold'
  },

  // ******** Floating Label Input ******** //

  // ******** Button Round ******** //
  buttonRound: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 50,  
    elevation: 20
  },
  buttonRoundText: {
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold'
  },
  buttonRoundBordered: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: 'transparent',
    borderColor: Colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 50,  
    elevation: 40
  },
  buttonRoundTextBordered: {
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold'
  },
  
})