import { reactive, computed } from "vue"
import constants from "@/constants.json"

export const store = reactive({
  rewardStocks: [
    { id: 1, stock: 101 },
    { id: 2, stock: 64 },
    { id: 3, stock: 0 },
  ],
  totalBackers: 5007,
  totalPledged: 89914,
})

export const rewards = computed(() => {
  return constants.map((reward) => {
    return {
      ...reward,
      stock: store.rewardStocks.find((item) => item.id === reward.id)?.stock ?? 0,
    }
  })
})
