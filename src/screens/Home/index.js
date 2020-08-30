import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Header } from '../../components'
import { useStore } from '../../contexts/StoreContexts'
import { getCurrentUserData, getCurrentLoan } from '../../api'
import { addNewLoan } from '../../api'
import styles from './styles'

const Home = ({ navigation }) => {
  const [loanAmount, setLoanAmount] = useState('0')
  const [loanTerm, setLoanTerm] = useState('0')
  const [loanPurpose, setLoanPurpose] = useState('')
  const [{ user }, { updateCurrentUser, updateCurrentLoan }] = useStore()
  const onSubmit = () => {
    if (!loanAmount || !Number(loanAmount) || !Number(loanTerm)) {
      alert('Please input all fields!!!')
      return;
    }

    addNewLoan({
      userId: user?.id,
      purpose: loanPurpose,
      loanAmount: loanAmount,
      loanTerm: loanTerm,
    }, (loans) => {
      updateCurrentLoan(loans)
      navigation.navigate('MainTab')
    })

  }
  const getInitialData = async () => {
    const userData = await getCurrentUserData(user?.id)
    updateCurrentUser(userData)
  }

  useEffect(() => {
    getInitialData()
  }, [])


  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{`Hi ${user?.name},`}</Text>
        <Text style={styles.title}>Do you have any plan want to do?</Text>
        <View style={styles.formWrapper}>
          <Text style={styles.smallTitle}>What is your loan purpose?</Text>
          <TextInput
            value={loanPurpose}
            onChangeText={(text) => setLoanPurpose(text)}
            style={styles.input}
            placeholder="Your purpose ..."
            underlineColorAndroid="transparent"
          />
          <Text style={styles.smallTitle}>How much that you want for your plan?</Text>
          <TextInput
            value={loanAmount}
            onChangeText={(text) => setLoanAmount(text)}
            keyboardType="number-pad"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.smallTitle}>How long that you want for the loan repayment (weeks)?</Text>
          <TextInput
            value={loanTerm}
            onChangeText={(text) => setLoanTerm(text)}
            keyboardType="number-pad"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
