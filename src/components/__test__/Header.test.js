import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByRole("button");
  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with login button using button name (getByRole(`button`,{name:'Login'}) )", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // For Specific button from multiple button
  const loginButton = screen.getByRole("button", { name: "Login" });
  //OR
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with cart item ( Using RegEx )", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // better flexible way using RegEx
  const cartItems = screen.getByText(/Cart/);
  // console.log(cartItems);
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // console.log(cartItems);
  expect(logoutButton).toBeInTheDocument();
});
