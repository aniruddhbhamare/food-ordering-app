import RestCard, { RestCardWithPromotedLabel } from "../RestCard";
import MOCK_DATA from "../mocks/restCardMockData.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// describe("Should render the RestCard Component ", () => {
it("Should render the RestCard Component with data", () => {
  //   console.log(MOCK_DATA);
  render(<RestCard resData={MOCK_DATA} />);
  //   // Querying
  const name = screen.getByText("Domino's Pizza");
  //   console.log("Chinese Wok", name);
  expect(name).toBeInTheDocument();
});

it("Should render the RestCard Component with Promoted label", () => {
  // Test HOC Component with promoted label
  const RestWithPromotedLabel = RestCardWithPromotedLabel(RestCard);
  render(<RestWithPromotedLabel resData={MOCK_DATA} />);
  const promotedLabel = screen.getByText("Promoted");
  //   console.log("promotedLabel", promotedLabel);
  //   //   totalRatingsString > "10K+"
  expect(promotedLabel).toBeInTheDocument();
});
// });
