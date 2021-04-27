import { useEffect, useState } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { updateRecord, formatReturnData } from "./helpers"

export interface PriceSizeObject {
  [price: number]: number
}

export type PriceSizeArray = [number, number][]

export type DisplayPriceSizeArray = [number, number, number][]

interface useXBTUSDType {
  loading: boolean
  error?: string
  data: {
    bids: DisplayPriceSizeArray
    asks: DisplayPriceSizeArray
  }
}

const PRODUCT_ID = "PI_XBTUSD"

const usePI_XBTUSD = (): useXBTUSDType => {
  const [current, setCurrent] = useState({ bids: {}, asks: {} })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    "wss://www.cryptofacilities.com/ws/v1",
    {
      onError: (event: WebSocketEventMap["error"]) => {
        if (event.type === "error") {
          setError("Something went wrong")
        }
      },
      shouldReconnect: () => true,
    },
  )

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState]

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
    if (connectionStatus !== "Open") {
      setLoading(true)
    }
  }, [connectionStatus])

  useEffect(() => {
    const data = lastMessage && JSON.parse(lastMessage.data)

    if (!data) {
      return
    }

    if (data.product_id === PRODUCT_ID) {
      setLoading(false)
      setError("")

      setCurrent({
        asks: updateRecord(data.asks, current.asks),
        bids: updateRecord(data.bids, current.bids),
      })
    }
  }, [lastMessage])

  return {
    loading,
    error,
    data: {
      bids: formatReturnData(current.bids, false),
      asks: formatReturnData(current.asks),
    },
  }
}

export default usePI_XBTUSD
