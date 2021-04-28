import { renderHook } from "@testing-library/react-hooks"
import useXBTUSD from "."
import useWebSocket from "react-use-websocket"
import faker from "faker"

jest.mock("react-use-websocket")
const mockUseWebSocket = useWebSocket as jest.Mock

describe("useXBTUSD", () => {
  it("should call sendJsonMessage and set loading to true", () => {
    const mockSendJsonMessage = jest.fn()
    mockUseWebSocket.mockReturnValue({
      sendJsonMessage: mockSendJsonMessage,
      readyState: 0,
    })

    const { result } = renderHook(() => useXBTUSD())

    const current = result.current

    expect(current.loading).toBeTruthy()
    expect(mockSendJsonMessage).toHaveBeenCalledTimes(1)
  })

  it("should call return specific data and set loading to false", async () => {
    const mockSendJsonMessage = jest.fn()
    const item1 = [faker.datatype.number({ min: 1 }), faker.datatype.number({ min: 1 })]
    const item2 = [faker.datatype.number({ min: 1 }), faker.datatype.number({ min: 1 })]

    mockUseWebSocket.mockReturnValue({
      sendJsonMessage: mockSendJsonMessage,
      lastMessage: {
        data: JSON.stringify({
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [item1],
          asks: [item2],
        }),
      },
      readyState: 1,
    })

    const { result } = renderHook(() => useXBTUSD())

    const current = result.current

    expect(current.loading).toBeFalsy()
    expect(current.data).toEqual({
      bids: [[...item1, item1[1]]],
      asks: [[...item2, item2[1]]],
    })
    expect(mockSendJsonMessage).toHaveBeenCalledTimes(1)
  })
})
