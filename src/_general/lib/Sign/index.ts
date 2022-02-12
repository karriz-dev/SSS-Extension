import {
  Transaction,
  NetworkType,
  Account,
  AggregateTransaction,
} from 'symbol-sdk'
import { removeTransaction } from '../Storage'

export const sign = (
  transaction: Transaction,
  priKey: string,
  networkType: NetworkType
) => {
  const acc = Account.createFromPrivateKey(priKey, networkType)

  const generationHash =
    networkType === NetworkType.TEST_NET
      ? '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836' // TEST_NET
      : '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6' // MAIN_NET

  const signedTx = acc.sign(transaction, generationHash)
  removeTransaction()
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0].id) {
      console.error('not found tabs')
      return
    }
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'SIGNED_TRANSACTION',
      signedTx: signedTx,
    })
  })
}

export const signWithCosignatories = (
  transaction: AggregateTransaction,
  accounts: Account[],
  priKey: string,
  networkType: NetworkType
) => {
  const acc = Account.createFromPrivateKey(priKey, networkType)

  const generationHash =
    networkType === NetworkType.TEST_NET
      ? '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836' // TEST_NET
      : '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6' // MAIN_NET

  const signedTx = acc.signTransactionWithCosignatories(
    transaction,
    accounts,
    generationHash
  )
  removeTransaction()
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0].id) {
      console.error('not found tabs')
      return
    }
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'SIGNED_TRANSACTION',
      signedTx: signedTx,
    })
  })
}