import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import { useTheme } from '../../contexts/theme'

interface Props {
  numOfPages: number
  activeIndex: number
  onDotPress: (index: number) => void
}

export const PaginationDots = ({numOfPages, activeIndex, onDotPress}: Props) => {
  const dots = Array.from({length: numOfPages}, (_, i) => i)
  const {ColorPallet} = useTheme()

  return (
    <View style={styles.dotContainer}>
      {dots.map((dot, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.dot, {backgroundColor: activeIndex === index ? ColorPallet.primary : ColorPallet.lightGray}]}
          onPress={() => onDotPress(index)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
})
