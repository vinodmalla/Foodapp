import { render } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestList.json";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should render the body component with search",async()=>{
   await act(async()=>
     render(<BrowserRouter>
     <Body />
     </BrowserRouter>))
    const searchbtn=screen.getByRole("button",{name:"search"})
    expect(searchbtn).toBeInTheDocument();
})