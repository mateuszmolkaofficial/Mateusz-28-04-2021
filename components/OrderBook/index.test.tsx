import React from "react"
import useXBTUSD, { UseXBTUSDReturnType, DisplayPriceSizeArray } from "hooks/useXBTUSD"
import OrderBook from "."
import { mountWithTheme } from "utils/test-utils"
import { LoaderWrapper, Error, ContentWrapper, SpreadWrapper } from "./styles"
import Table from "./components/Table"
import faker from "faker"
import { roundNumber } from "utils/utils"
import { last, first } from "lodash/fp"

jest.mock("hooks/useXBTUSD")
const mockUseXBTUSD = useXBTUSD as jest.Mock<UseXBTUSDReturnType>

describe("OrderBook", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should show loading state when useXBTUSD hook loading is on", () => {
    mockUseXBTUSD.mockReturnValue({
      loading: true,
      data: {
        bids: [],
        asks: [],
      },
    })

    const wrapper = mountWithTheme(<OrderBook />)

    expect(wrapper.exists(LoaderWrapper)).toBeTruthy()
  })

  it("should show error message when useXBTUSD hook returns error", () => {
    mockUseXBTUSD.mockReturnValue({
      loading: false,
      error: "Something went wrong",
      data: {
        bids: [],
        asks: [],
      },
    })

    const wrapper = mountWithTheme(<OrderBook />)

    expect(wrapper.exists(Error)).toBeTruthy()
  })

  it("should show ContentWrapper, Tables and SpreadWrapper", () => {
    const mockBids: DisplayPriceSizeArray = [
      [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()],
      [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()],
    ]

    const mockAsks: DisplayPriceSizeArray = [
      [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()],
      [faker.datatype.number(), faker.datatype.number(), faker.datatype.number()],
    ]

    mockUseXBTUSD.mockReturnValue({
      loading: false,
      data: {
        bids: mockBids,
        asks: mockAsks,
      },
    })

    const wrapper = mountWithTheme(<OrderBook />)

    expect(wrapper.exists(ContentWrapper)).toBeTruthy()
    expect(wrapper.find(Table).first().props()).toEqual({ data: mockAsks, isAsk: true })
    expect(wrapper.find(Table).last().props()).toEqual({ data: mockBids })
    expect(wrapper.find(SpreadWrapper).text()).toEqual(
      `Spread: ${roundNumber(last(mockAsks)[0] - first(mockBids)[0], 2)}`,
    )
  })
})
