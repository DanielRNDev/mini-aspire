import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContanter: {
    flex: 1,
    padding: 15,
  },
  wrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    padding: 20,
    marginBottom: 10
  },
  purpose: {
    fontSize: 18,
    letterSpacing: 1.5,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#003124',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.3,
    color: '#fff'
  }
})
