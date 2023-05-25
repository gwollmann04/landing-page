import { CronologyItemPropTypes } from '@/src/@types/about'
import { LeftSideItem, RightSideItem } from '@/src/components'

const CronologyItem = ({ index, item }: CronologyItemPropTypes) => {
  return Number(index) % 2 === 0 ? (
    <LeftSideItem key={item.value} label={item.label} value={item.value} />
  ) : (
    <RightSideItem key={item.value} label={item.label} value={item.value} />
  )
}

export default CronologyItem
