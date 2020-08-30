import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10
  },
  formWrapper: {
    marginVertical: 30
  },
  smallTitle: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 16,
    letterSpacing: 2,
    borderWidth: 1,
    borderColor: '#8a8d91',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#003124',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.3,
    color: '#fff'
  }
})
