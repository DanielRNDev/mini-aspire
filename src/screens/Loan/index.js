import React, { useEffect } from 'react'
import {
  View,
  ScrollView,
  Text,
} from 'react-native'
import _ from 'lodash'
import { Header } from '../../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStore } from '../../contexts/StoreContexts'
import { getCurrentUserData, getCurrentLoan } from '../../api'
import styles from './styles'

const LoanInformation = ({ loan }) => {
  if (_.isEmpty(loan)) {
    return null
  }
  const { amount, recentlyPayment, purpose, approvedBankFullName } = loan
  const totalPaid = recentlyPayment.length ? recentlyPayment.reduce((acc, cur) => acc + Number(cur.payAmount), 0) : 0
  const progress = (totalPaid / amount) * 100

  return (
    <View style={styles.loanWrapper}>
      <Text style={styles.paymentText}>{purpose}</Text>
      <View style={styles.borrowBar}>
        <Text style={styles.smallTitle}>Borrow Amount</Text>
        <MaterialCommunityIcons
          name="star-four-points"
          color="#fff"
          size={25}
        />
      </View>
      <Text style={styles.money}>{`$ ${amount}`}</Text>
      <View style={styles.progressWrapper}>
        <View style={styles.startPoint} />
        <View style={[styles.progress, { width: `${progress}%` }]}>
          <View style={styles.endPoint} />
        </View>
      </View>
      <Text style={styles.content}>{`Total paid: $${totalPaid}`}</Text>
      {approvedBankFullName && <Text style={styles.content}>{`Approved by: ${approvedBankFullName}`}</Text>}
      <View style={styles.recentPaymentWrapper}>
        {
          recentlyPayment.map((paymentItem, index) => (
            <View style={[styles.payment, index === recentlyPayment.length - 1 && styles.lastItem]} key={paymentItem?.date}>
              <Text style={styles.paymentText}>{paymentItem?.date}</Text>
              <Text style={[styles.paymentText, styles.paymentAmount]}>{`$ ${paymentItem?.payAmount}`}</Text>
              {(index !== recentlyPayment.length - 1) && (
                <View style={styles.breakline} />
              )}
            </View>
          ))
        }
      </View>
    </View>
  )
}

const Loan = () => {
  const [{ user, loans = [] }] = useStore()

  return (
    <View style={styles.container}>
      <Header title="Loan" />
      <ScrollView contentContainerStyle={styles.innerContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{`Hi ${user?.name},`}</Text>
        <Text style={styles.title}>{`Here is your loans information:`}</Text>
        {
          loans[0].loan?.map(item => (
            <LoanInformation loan={item} key={item.purpose} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Loan
