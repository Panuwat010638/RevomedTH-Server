import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import { useId } from 'react'

export default function SeoCountString(props) {
  const inputId = useId()
    const {elementProps, onChange,
        schemaType,
        validation,
        value = ''} = props
 
        const MaxConstraint = schemaType.validation[0]._rules.filter(rule => rule.flag == 'max')[0].constraint

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])
  return (
    <Stack space={2}>
      <TextInput
      id={inputId} 
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      <Text muted size={1}>
        {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>{value.length}</span>): value.length== 0 ? (value.length):(<span style={{color:"#22c55e"}}>{value.length}</span>)}
        {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>/</span>): value.length== 0 ? ('/'):(<span style={{color:"#22c55e"}}>{'/'}</span>)}
        {value.length > MaxConstraint ? (<span style={{color:"#ff0000"}}>{MaxConstraint}</span>): value.length== 0 ? (MaxConstraint):(<span style={{color:"#22c55e"}}>{MaxConstraint}</span>)}
      </Text>
    </Stack>
  )
}
