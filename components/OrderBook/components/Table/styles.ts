import styled, { keyframes } from "styled-components"
import { color, spacing, typography } from "styles/accessors"

export const SectionWrapper = styled.section`
  padding-top: ${spacing(1)}px;
  margin-bottom: ${spacing(2)}px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const TableWrapper = styled.div`
  color: ${color("white")};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding-right: ${spacing(3)}px;
  position: relative;
`

const colorIn = keyframes`
  from {background-color:rgba(211,211,211, 0.3);}
    to {background-color:rgba(242, 245, 169, 0);}
`

export const ContentTableWrapper = styled(TableWrapper)`
  animation: 0.4s ${colorIn};
`

export const Pill = styled.div`
  ${typography("body0")}
  text-align: right;
  color: ${color("white")};
  z-index: 1;
  padding: ${spacing(1)}px 0;
  cursor: pointer;

  &:hover {
    ${typography("body0bold")};
  }
`

export const InfoPill = styled(Pill)`
  color: ${color("lightGrey")};
  padding-bottom: ${spacing(2)}px;

  &:hover {
    ${typography("body0")};
  }
`

export const AskPricePill = styled(Pill)`
  color: ${color("red")};
`

export const BidPricePill = styled(Pill)`
  color: ${color("green")};
`

interface AskMaskProps {
  width: number
}

export const AskMask = styled.div.attrs((props: AskMaskProps) => ({
  // This rule is set as an attribute for performance reasons
  style: {
    width: `${props.width}%`,
  },
}))<AskMaskProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${color("red")};
  opacity: 0.3;
`

export const BidMask = styled(AskMask)`
  background-color: ${color("green")};
`
