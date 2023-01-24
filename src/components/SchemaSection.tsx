import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'

import DefaultComponentsThemes from '../defaultComponentsThemes'

import {ListItems} from './ListItems'

interface Props {
  title: string
  items: any
}

export const SchemaSection = (props: Props) => {
  const defaultStyles = DefaultComponentsThemes()

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.innerScrollViewStyle}>
        <Text style={[defaultStyles.text, {paddingLeft: 10}]}>{props.title}</Text>
        {props.items.map((item: any) => {
          return <ListItems item={item} key={item.id} />
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewStyle: {flex: 1, width: '100%'},
  innerScrollViewStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})
