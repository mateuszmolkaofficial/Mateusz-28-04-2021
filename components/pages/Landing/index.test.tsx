import React from "react"
import LandingPage from "."
import { shallow } from "enzyme"
import OrderBook from "components/OrderBook"

describe("LandingPage", () => {
  it("should show OrderBook", () => {
    const wrapper = shallow(<LandingPage />)

    expect(wrapper.exists(OrderBook)).toBeTruthy()
  })
})
