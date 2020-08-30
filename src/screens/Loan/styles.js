import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {
    marginBottom: 30,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10
  },
  loanWrapper: {
    backgroundColor: '#00af',
    borderRadius: 8,
    padding: 15,
    marginTop: 10
  },
  borrowBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallTitle: {
    color: '#fff',
    letterSpacing: 2,
    fontSize: 12,
  },
  content: {
    color: '#fff',
    letterSpacing: 2,
    fontSize: 12,
    marginVertical: 5
  },
  money: {
    fontSize: 35,
    color: '#fff',
    letterSpacing: 0.8
  },
  progressWrapper: {
    marginTop: 40,
    marginBottom: 20,
    width: '100%',
    height: 1,
    backgroundColor: '#606369',
  },
  startPoint: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -2,
    top: -4.5,
  },
  progress: {
    position: 'absolute',
    height: 1,
    backgroundColor: '#fff',
  },
  endPoint: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    right: -2,
    top: -4.5,
  },
  recentPaymentWrapper: {
    marginTop: 30,
  },
  payment: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    marginBottom: 15
  },
  lastItem: {
    marginBottom: 0
  },
  paymentText: {
    fontSize: 18,
    letterSpacing: 1.5,
    color: '#fff',
  },
  paymentAmount: {
    fontWeight: 'bold'
  },
  breakline: {
    width: '70%',
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: '15%',
    backgroundColor: '#fff',
  }
})
