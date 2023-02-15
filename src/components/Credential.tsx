import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {useTheme} from '../contexts/theme'
import DefaultComponentsThemes from '../defaultComponentsThemes'

import {Attributes} from './Attributes'

interface Props {
  identifier: any
  attributes: any
}

export const Credential = ({identifier, attributes}: Props) => {
  const {ColorPallet} = useTheme()
  const defaultStyles = DefaultComponentsThemes()
  const [schemaName, setSchemaName] = useState('')
  const [emitter, setEmitter] = useState('')

  useEffect(() => {
    const schemaIdInfo = identifier.schema_id.split(':')
    const credDefIdInfo = identifier.cred_def_id.split(':')
    setSchemaName(schemaIdInfo[schemaIdInfo.length - 2])
    setEmitter(credDefIdInfo[credDefIdInfo.length - 1])
  }, [identifier])

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10,
      marginVertical: 15,
      borderRadius: 5,
      borderColor: ColorPallet.lightGray,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    credentialEmitterContainer: {
      paddingBottom: 5,
    },
    schemaNameContainer: {
      paddingBottom: 10,
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.credentialEmitterContainer}>
        <Text style={[defaultStyles.text, {color: ColorPallet.darkGray}]}>{emitter}</Text>
      </View>
      <View style={styles.schemaNameContainer}>
        <Text style={[defaultStyles.text, {fontWeight: 'bold'}]}>{schemaName}</Text>
      </View>
      {Object.keys(attributes).map((key, index) => {
        return <Attributes key={index.toString()} name={key} value={attributes[key]} />
      })}
    </View>
  )
}
