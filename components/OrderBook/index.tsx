import React from "react"
import useXBTUSD from "hooks/useXBTUSD"
import Loader from "react-loader-spinner"
import { last, first, max } from "lodash/fp"
import {
  Wrapper,
  TableWrapper,
  ContentWrapper,
  LoaderWrapper,
  AskPricePill,
  BidPricePill,
  Pill,
  SectionWrapper,
  AskMask,
  BidMask,
} from "./styles"

const OrderBook = () => {
  const { loading, data } = useXBTUSD()
  const asks = data && data.asks
  const bids = data && data.bids

  return (
    <Wrapper>
      {loading ? (
        <LoaderWrapper>
          <Loader type="Audio" color="#2BBAA5" height={100} width={100} />
        </LoaderWrapper>
      ) : (
        <ContentWrapper>
          <SectionWrapper>
            <TableWrapper>
              <Pill>Price</Pill>
              <Pill>Size</Pill>
              <Pill>Total</Pill>
              <AskMask width={100} />
            </TableWrapper>
            {asks.map(ask => (
              <TableWrapper key={ask[0]}>
                <AskPricePill>{ask[0]}</AskPricePill>
                <Pill>{ask[1]}</Pill>
                <Pill>{ask[2]}</Pill>
                <AskMask width={(ask[2] / max([first(asks)[2], 100000])) * 100} />
              </TableWrapper>
            ))}
          </SectionWrapper>
          <SectionWrapper>
            <TableWrapper>
              <Pill>Price</Pill>
              <Pill>Size</Pill>
              <Pill>Total</Pill>
            </TableWrapper>
            {bids.map(bid => (
              <TableWrapper key={bid[0]}>
                <BidPricePill>{bid[0]}</BidPricePill>
                <Pill>{bid[1]}</Pill>
                <Pill>{bid[2]}</Pill>
                <BidMask width={(bid[2] / max([last(bids)[2], 100000])) * 100} />
              </TableWrapper>
            ))}
          </SectionWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  )
}

export default OrderBook
