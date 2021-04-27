import React, { FC } from "react"
import { DisplayPriceSizeArray } from "hooks/useXBTUSD"
import { roundNumber } from "utils/utils"
import { first, max, last } from "lodash/fp"
import {
  SectionWrapper,
  TableWrapper,
  InfoPill,
  AskPricePill,
  Pill,
  BidPricePill,
  AskMask,
  BidMask,
  ContentTableWrapper,
} from "./styles"

interface TableProps {
  data: DisplayPriceSizeArray
  isAsk?: boolean
}

const Table: FC<TableProps> = ({ data, isAsk }) => {
  return (
    <SectionWrapper>
      <TableWrapper>
        <InfoPill>Price</InfoPill>
        <InfoPill>Size</InfoPill>
        <InfoPill>Total</InfoPill>
      </TableWrapper>
      {data.map(item => (
        <ContentTableWrapper key={item[0]}>
          {isAsk ? (
            <AskPricePill>{roundNumber(item[0], 2)}</AskPricePill>
          ) : (
            <BidPricePill>{roundNumber(item[0], 2)}</BidPricePill>
          )}
          <Pill>{item[1]}</Pill>
          <Pill>{item[2]}</Pill>
          {isAsk ? (
            <AskMask width={(item[2] / max([first(data)[2], 100000])) * 100} />
          ) : (
            <BidMask width={(item[2] / max([last(data)[2], 100000])) * 100} />
          )}
        </ContentTableWrapper>
      ))}
    </SectionWrapper>
  )
}

export default Table
