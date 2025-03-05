import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
test("test textbox are loaded in contact component or not ",()=>{
    render (<Contact />);
    const heading =screen.getByRole("textbox")
    expect(heading).toBeInTheDocument();
}

)
test("test heading are loaded in contact component or not ",()=>{
    render (<Contact />);
    const heading =screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
}

)
test("test button are loaded in contact component or not ",()=>{
    render (<Contact />);
    const button =screen.getByRole("button")
    expect(button).toBeInTheDocument();
}

)
test("test placeholder text are loaded in contact component or not ",()=>{
    render (<Contact />);
    const heading =screen.getByPlaceholderText("name")
    expect(heading).toBeInTheDocument();
}

)