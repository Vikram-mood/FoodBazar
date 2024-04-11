import { render } from "@testing-library/react"
import Body from "../Body"
import DATA from "../mocks/mockRestListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(DATA);
        }
    })
});
test("should render the cards ",async ()=>{

    await act(async ()=>render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>))
})