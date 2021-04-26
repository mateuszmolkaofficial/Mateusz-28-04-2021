import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import { updateRecord, formatReturnData } from "./helpers"

export interface PriceSizeObject {
  [price: number]: number
}

export type PriceSizeArray = [number, number][]

export type DisplayPriceSizeArray = [number, number, number][]

interface useXBTUSDType {
  loading: boolean
  data: {
    bids: DisplayPriceSizeArray
    asks: DisplayPriceSizeArray
  }
}

const PRODUCT_ID = "PI_XBTUSD"

const usePI_XBTUSD = (): useXBTUSDType => {
  const [current, setCurrent] = useState({ bids: {}, asks: {} })
  const [loading, setLoading] = useState(true)
  const { sendJsonMessage, lastMessage } = useWebSocket("wss://www.cryptofacilities.com/ws/v1")

  useEffect(
    () =>
      sendJsonMessage({
        event: "subscribe",
        feed: "book_ui_1",
        product_ids: [PRODUCT_ID],
      }),
    [],
  )

  useEffect(() => {
    const data = lastMessage && JSON.parse(lastMessage.data)

    if (!data) {
      return
    }

    if (data.event === "subscribed") {
      setLoading(false)
    }

    if (data.product_id === PRODUCT_ID) {
      setCurrent({
        asks: updateRecord(data.asks, current.asks),
        bids: updateRecord(data.bids, current.bids),
      })
    }
  }, [lastMessage])

  return {
    loading,
    data: {
      bids: formatReturnData(current.bids, false),
      asks: formatReturnData(current.asks),
    },
  }
}

export default usePI_XBTUSD
