import {StyleSheet} from 'react-native'

import {useTheme} from '../../../../contexts/theme'

const {ColorPallet} = useTheme()
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    //padding: '4%',
    borderRadius: 2,
    //backgroundColor: ColorPallet.grayscale.lightGrey,
    marginBottom: '2%',
    overflow: 'hidden',

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: ColorPallet.lightGray,
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
  },
  body: {
    padding: '4%',
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  },
  titleContainer: {
    padding: '4%',
    backgroundColor: ColorPallet.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
