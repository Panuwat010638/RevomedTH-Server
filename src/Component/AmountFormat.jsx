import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import { useId } from 'react'

export default function AmountFormat(props) {
    const inputId = useId()
    const {elementProps, onChange,
        value = ''} = props
 

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

    const formattedAmount = new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
      }).format(value);
  return (
    <Stack space={2}>
      <TextInput
      type='Number'
      id={inputId} 
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      <Text muted size={1}>
        {formattedAmount}
      </Text>
    </Stack>
  )
}
