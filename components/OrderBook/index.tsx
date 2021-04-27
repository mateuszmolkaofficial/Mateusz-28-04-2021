import React from "react"
import useXBTUSD from "hooks/useXBTUSD"
import Loader from "react-loader-spinner"
import { last, first, max, isEmpty } from "lodash/fp"
import { roundNumber } from "utils"
import {
  Wrapper,
  TableWrapper,
  ContentWrapper,
  LoaderWrapper,
  AskPricePill,
  BidPricePill,
  Pill,
  InfoPill,
  SectionWrapper,
  AskMask,
  BidMask,
  SpreadWrapper,
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
              <InfoPill>Price</InfoPill>
              <InfoPill>Size</InfoPill>
              <InfoPill>Total</InfoPill>
            </TableWrapper>
            {asks.map(ask => (
              <TableWrapper key={ask[0]}>
                <AskPricePill>{roundNumber(ask[0], 2)}</AskPricePill>
                <Pill>{ask[1]}</Pill>
                <Pill>{ask[2]}</Pill>
                <AskMask width={(ask[2] / max([first(asks)[2], 100000])) * 100} />
              </TableWrapper>
            ))}
          </SectionWrapper>
          <SpreadWrapper>
            Spread:{" "}
            {!isEmpty(asks) && !isEmpty(bids) && roundNumber(last(asks)[0] - first(bids)[0], 2)}
          </SpreadWrapper>
          <SectionWrapper>
            <TableWrapper>
              <InfoPill>Price</InfoPill>
              <InfoPill>Size</InfoPill>
              <InfoPill>Total</InfoPill>
            </TableWrapper>
            {bids.map(bid => (
              <TableWrapper key={bid[0]}>
                <BidPricePill>{roundNumber(bid[0], 2)}</BidPricePill>
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
