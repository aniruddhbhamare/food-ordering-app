import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/store/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //This should be 1st test
  const accordionHeader = screen.getByText("Recommended (20)");
  //   console.log("accordionHeader", accordionHeader);
  fireEvent.click(accordionHeader);
  const itemList = screen.getAllByTestId("itemList");
  //   console.log("---------", itemList.length);
  expect(itemList.length).toBe(20);
  const beforeHeaderCart = screen.getByText("Cart - 0");
  expect(beforeHeaderCart).toBeInTheDocument();

  // This should be 2nd test
  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  const afterHeaderCart = screen.getByText("Cart - 1");
  expect(afterHeaderCart).toBeInTheDocument();

  // This should be 3rd test
  fireEvent.click(addButtons[1]);
  const headerCart = screen.getByText("Cart - 2");
  expect(headerCart).toBeInTheDocument();

  // This should be 6th test
  //   fireEvent.click(headerCart);
  const removeButtons = screen.getAllByRole("button", { name: "Remove" });
  fireEvent.click(removeButtons[0]);
  expect(screen.getAllByTestId("itemList").length).toBe(21);

  // This should be 4th test
  //   fireEvent.click(headerCart);
  //   const cartDataButtons = screen.getAllByRole("button", { name: "Remove" });
  //   expect(cartDataButtons.length).toBe(2);

  // OR
  fireEvent.click(headerCart);
  const cartCards = screen.getAllByTestId("itemList");
  expect(cartCards.length).toBe(21);

  // This should be 5th test
  const clearButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearButton);
  //   expect(screen.getAllByTestId("itemList").length).toBe(20);
  const cartCard = screen.getAllByTestId("itemList");
  expect(cartCard.length).toBe(20);

  expect(screen.getByText("Cart is empty ..!")).toBeInTheDocument();
});
