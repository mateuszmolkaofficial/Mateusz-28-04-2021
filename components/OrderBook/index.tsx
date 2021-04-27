import React from "react"
import useXBTUSD from "hooks/useXBTUSD"
import Loader from "react-loader-spinner"
import { last, first, isEmpty } from "lodash/fp"
import { roundNumber } from "utils/utils"
import { Wrapper, ContentWrapper, LoaderWrapper, SpreadWrapper, Error } from "./styles"
import Table from "./components/Table"

const OrderBook = () => {
  const { loading, data, error } = useXBTUSD()

  const asks = data && data.asks
  const bids = data && data.bids

  return (
    <Wrapper>
      {loading || error ? (
        <LoaderWrapper>
          <Loader type="Audio" color="#2BBAA5" height={100} width={100} />
          {error && (
            <Error>
              Something went wrong...
              <br />
              Let us try to reconnect!
            </Error>
          )}
        </LoaderWrapper>
      ) : (
        <ContentWrapper>
          <Table isAsk data={asks} />
          <SpreadWrapper>
            Spread:{" "}
            {!isEmpty(asks) && !isEmpty(bids) && roundNumber(last(asks)[0] - first(bids)[0], 2)}
          </SpreadWrapper>
          <Table data={bids} />
        </ContentWrapper>
      )}
    </Wrapper>
  )
}

export default OrderBook
