import {Text, View} from 'react-native'

import DefaultComponentsThemes from '../defaultComponentsThemes'

import {LargeButton} from './LargeButton'

interface Props {
  body: string
  actionLabel: string
  action: () => void
}

export const EmptyList = ({body, actionLabel, action}: Props) => {
  const defaultStyles = DefaultComponentsThemes()
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={[
          defaultStyles.text,
          {
            marginVertical: 50,
            paddingHorizontal: 10,
          },
        ]}>
        {body}
      </Text>
      <LargeButton isPrimary title={actionLabel} action={action} />
    </View>
  )
}
