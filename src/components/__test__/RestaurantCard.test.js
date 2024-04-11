import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"

import MOCK_DATA from "../../components/mocks/ResCard.json"

test("should render restaurant card",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name=screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
   
})