import {StyleSheet, View} from 'react-native'

interface Props {
  width?: string | number
  height?: string | number
  color: string
  opacity?: number
}

export const Separator = ({color, width = '100%', height = 1, opacity = 0.1}: Props) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: color,
      opacity: opacity,
    },
    outerContainer: {
      flex: 1,
      paddingVertical: 5,
    },
  })
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}></View>
    </View>
  )
}
