import React from 'react'
import {FlatList, View} from 'react-native'

import {PaginationDots} from './PaginationDots'
import {ItemInfo, SliderItem} from './SliderItem'

interface Props {
  items: ItemInfo[]
}

export const HorizontalSlider = ({items}: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const flatListRef = React.useRef<FlatList>(null)

  const handleDotPress = (index: number) => {
    setActiveIndex(index)
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true})
    }
  }

  return (
    <View style={{width: '100%', height: 180, marginTop: 20}}>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <SliderItem {...item} />}
        onMomentumScrollEnd={({nativeEvent}) => {
          const currentPage = Math.round(nativeEvent.contentOffset.x / 220)
          setActiveIndex(currentPage)
        }}
        snapToInterval={220}
        pagingEnabled
      />
      <PaginationDots activeIndex={activeIndex} numOfPages={items.length} onDotPress={handleDotPress} />
    </View>
  )
}
