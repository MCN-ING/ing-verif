import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export type NoticeIcon =
  | 'warning-outline'
  | 'checkmark-circle-outline'
  | 'information-circle-outline'
  | 'close-circle-outline'

interface NoticeProps {
  title?: string
  message: string
  icon: NoticeIcon
  iconBackground: Pick<React.CSSProperties, 'backgroundColor'>
  iconColor: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#C5CAD2',
    borderWidth: 1,
  },
  iconBox: {
    width: 40,
    alignItems: 'center',
  },
  iconBoxWithTitle: {
    paddingTop: 24,
  },
  iconBoxWithoutTitle: {
    justifyContent: 'center',
  },
  icon: {
    paddingHorizontal: 8,
  },
  textContainer: {
    paddingVertical: 24,
    paddingRight: 32,
    paddingLeft: 16,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#223654',
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: '#223654',
  },
})

export const Notice = (props: NoticeProps) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconBox,
          props.title ? styles.iconBoxWithTitle : styles.iconBoxWithoutTitle,
          props.iconBackground,
        ]}>
        <Icon name={props.icon} size={24} style={[styles.icon]} color={props.iconColor} />
      </View>
      <View style={styles.textContainer}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        <Text style={styles.message}>{props.message}</Text>
      </View>
    </View>
  )
}
