import React from "react"
import { NextPage } from "next"
import LandingPage from "components/pages/Landing"
import Metadata from "components/metadata"

const Page: NextPage = () => (
  <>
    <Metadata />
    <LandingPage />
  </>
)

export default Page
