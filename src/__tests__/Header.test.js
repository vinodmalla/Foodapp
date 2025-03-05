import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import store from "../Cartapp"; // Ensure Cartapp exports the Redux store
import "@testing-library/jest-dom";

it("checks if the login button is present", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button"); // Case insensitive match
    expect(loginButton).toBeInTheDocument(); // Corrected spelling
});
