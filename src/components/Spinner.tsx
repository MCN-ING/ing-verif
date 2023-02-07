import React, {useEffect} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated'

import {useTheme} from '../contexts/theme'

export const Spinner = () => {
  const {ColorPallet} = useTheme()
  const rotation = useSharedValue(0)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      minWidth: '100%',
    },
    spinner: {
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      borderWidth: 7,
      borderColor: ColorPallet.primaryBackground,
      zIndex: 1,
      borderLeftColor: ColorPallet.primary,
    },
  })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }
  }, [rotation.value])

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    )
    return () => cancelAnimation(rotation)
  }, [])

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/Lis.png')} />
      </View>
      <Animated.View style={[styles.spinner, animatedStyles]} />
    </View>
  )
}
