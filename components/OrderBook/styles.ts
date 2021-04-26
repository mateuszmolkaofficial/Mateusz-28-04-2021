import styled from "styled-components"
import { color, spacing, borderRadius } from "styles/accessors"

export const Wrapper = styled.div`
  background-color: ${color("grey")};
  padding: ${spacing(3)}px 0;
  border-radius: ${borderRadius("big")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 350px;
  border: 1px solid ${color("lightGrey")};
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
`

export const SectionWrapper = styled.section`
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
  padding: 0 ${spacing(3)}px;
  position: relative;
  overflow: hidden;
`

export const Pill = styled.div`
  text-align: right;
  color: ${color("white")};
  z-index: 1;
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
