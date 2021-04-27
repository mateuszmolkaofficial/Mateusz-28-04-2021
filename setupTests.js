import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "@testing-library/jest-dom"

// Configure Enzyme with React 17 adapter
Enzyme.configure({ adapter: new Adapter() })
