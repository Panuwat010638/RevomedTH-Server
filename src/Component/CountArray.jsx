import {useCallback} from 'react'
import {Stack, Text, TextInput,Flex,Box} from '@sanity/ui'
import {set, unset} from 'sanity'
import { useId } from 'react'

export default function CountArray(props) {
    const inputId = useId()
    const {elementProps, onChange,
        schemaType,
        validation,
        value = ''} = props
 
        const MaxConstraint = schemaType.validation[0]._rules.filter(rule => rule.flag == 'max')[0].constraint



  return (
    <Stack space={2}>
        <Flex gap={3} paddingRight={2} align="center">
            <Box flex={1}>{props.renderDefault(props)}</Box>
        </Flex>
        <Text muted size={1}>
          {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>{value.length}</span>): value.length== 0 ? (value.length):(<span style={{color:"#22c55e"}}>{value.length}</span>)}
          {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>/</span>): value.length== 0 ? ('/'):(<span style={{color:"#22c55e"}}>{'/'}</span>)}
          {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>{MaxConstraint}</span>): value.length== 0 ? (MaxConstraint):(<span style={{color:"#22c55e"}}>{MaxConstraint} {value.length==MaxConstraint ? "Full":""}</span>)}
        </Text>
    </Stack>
  )
}
