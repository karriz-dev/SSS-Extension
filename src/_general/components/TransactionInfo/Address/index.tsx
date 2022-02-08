import React from 'react'

import styled from '@emotion/styled'
import Typography from '../../Typography'
import { NamespaceId, UnresolvedAddress } from 'symbol-sdk'

export type Props = {
  address: UnresolvedAddress
}

const TxAddress: React.VFC<Props> = ({ address }) => {
  if (address instanceof NamespaceId) {
    console.log('namespace', address)
    const ns = new NamespaceId(address.toHex())
    console.log('ns-fn', ns.fullName)
    return (
      <Wrapper>
        <Typography text="NameSpace" variant="h5" />
        <Center>
          <Typography text={ns.fullName || address.plain()} variant="h6" />
        </Center>
      </Wrapper>
    )
  } else {
    console.log('addr')
    return (
      <Wrapper>
        <Typography text="Address" variant="h5" />
        <Center>
          <Typography text={address.plain()} variant="h6" />
        </Center>
      </Wrapper>
    )
  }
}

export default TxAddress

const Wrapper = styled('div')({
  margin: '8px',
})

const Center = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})