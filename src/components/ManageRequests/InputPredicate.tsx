import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'

import {attributeType} from '../../constants'
import {useTheme} from '../../contexts/theme'
import {lightAttributeDetails, SpecificPredicatesDetails} from '../../contexts/types'

interface InputPredicateProps {
  current: lightAttributeDetails
  setPredicate: (value: number) => void
}

export const InputPredicate = ({current, setPredicate}: InputPredicateProps) => {
  const [value, setValue] = useState<string | undefined>()
  const [isPredicate, setIsPredicate] = useState<boolean>(false)
  const {t} = useTranslation()
  const {ColorPallet} = useTheme()

  const styles = StyleSheet.create({
    container: {
      minHeight: 50,
      marginTop: 0,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: ColorPallet.lightGray,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: ColorPallet.darkGray,
    },
  })

  useEffect(() => {
    if (current.specific?.type === attributeType.PREDICATE) {
      setIsPredicate(true)
      setValue((current.specific as SpecificPredicatesDetails).value.toString())
    } else {
      setIsPredicate(false)
    }
  }, [current])

  useEffect(() => {
    if (isPredicate) {
      setValue(
        t(`Attributes.Predicate.${current.raw_name}.${(current.specific as SpecificPredicatesDetails).operator}`, {
          value: (current.specific as SpecificPredicatesDetails).value,
        })
      )
    }
  }, [isPredicate, current])

  return (
    <View>
      {isPredicate ? (
        <TextInput
          keyboardType="numeric"
          style={styles.container}
          onChangeText={(val) => setValue(val)}
          value={value}
          onFocus={() => setValue((current.specific as SpecificPredicatesDetails).value.toString())}
          onBlur={() => {
            setPredicate(parseInt(value ? value : '0'))
            setValue(
              t(
                `Attributes.Predicate.${current.raw_name}.${(current.specific as SpecificPredicatesDetails).operator}`,
                {
                  value: (current.specific as SpecificPredicatesDetails).value,
                }
              )
            )
          }}
        />
      ) : null}
    </View>
  )
}
