import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading");
    //Assertion

    expect(heading).toBeInTheDocument();
})

test("should load 2 input boxes",()=>{
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole("textbox")
    
    expect(inputBoxes.length).toBe(2);
})