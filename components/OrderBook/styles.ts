import styled from "styled-components"
import { color, spacing, borderRadius, typography } from "styles/accessors"

export const Wrapper = styled.div`
  background-color: ${color("grey")};
  border-radius: ${borderRadius("big")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 440px;
  border: 1px solid ${color("lightGrey")};
`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`

export const Error = styled.div`
  ${typography("body0")};
  margin-top: ${spacing(2)}px;
  color: ${color("white")};
  text-align: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
`

export const SpreadWrapper = styled.div`
  ${typography("body1bold")};
  border-top: 1px solid ${color("lightGrey")};
  border-bottom: 1px solid ${color("lightGrey")};
  width: 100%;
  padding: ${spacing(2)}px 0;
  color: ${color("white")};
  text-align: center;
`
