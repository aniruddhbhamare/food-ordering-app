import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/store/appStore";
import UserContext from "../../../utils/UserContext";
import { useContext } from "react";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   });
// });

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

it("Should search Res List for pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardAllBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardAllBeforeSearch.length).toBe(9);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  //   //   console.log("searchInput", searchInput);
  fireEvent.change(searchInput, {
    target: {
      value: "pizza",
    },
  });

  fireEvent.click(searchButton);
  //   // Screen should load 1 card
  const cardAftersearch = screen.getAllByTestId("resCard");
  expect(cardAftersearch.length).toBe(1);
});

it("Should filter top rated restaurant ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardBefore = screen.getAllByTestId("resCard");
  expect(resCardBefore.length).toBe(9);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedButton);

  const resCardAfter = screen.getAllByTestId("resCard");
  expect(resCardAfter.length).toBe(6);
});

it("Should render the default User ", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ defaultUser: "test", setUserName: jest.fn() }}
        >
          <BrowserRouter>
            <Header />
            <Body />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    );
  });

  // const beforeHeaderUser = screen.getByText("test");
  // expect(beforeHeaderUser).toBeInTheDocument();

  const defaultUser = screen.getByTestId("activeUser");
  expect(defaultUser).toBeInTheDocument();

  fireEvent.change(defaultUser, {
    target: {
      value: "user",
    },
  });
  // const aftDefaultUser = screen.getByText("user");
  // console.log(aftDefaultUser);
  // expect(aftDefaultUser).toBeInTheDocument();

  // Looks like you are offline. Please check your internet connection!!!
  // const offlineMessage = screen.getByText(
  //   "Looks like you are offline. Please check your internet connection!!!"
  // );
  // expect(offlineMessage).toBeInTheDocument();
});
