import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Header } from '../../components'
import { useStore } from '../../contexts/StoreContexts'
import { repay } from '../../api'
import styles from './styles'

const Repay = () => {
  const [{ user, loans = [] }, { updateCurrentLoan }] = useStore()
  const repayment = (variables) => {
    repay(variables, (loans) => {
      updateCurrentLoan(loans)
      alert('Success')
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Repay" />
      <View style={styles.innerContanter}>
        {
          loans[0].loan?.map(item => (
            <View style={styles.wrapper} key={item.purpose}>
              <Text style={styles.purpose}>{item.purpose}</Text>
              <TouchableOpacity style={styles.button} onPress={() => repayment({
                userId: loans[0].userId,
                purpose: item.purpose,
              })}>
                <Text style={styles.text}>Repay</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default Repay;
