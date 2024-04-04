import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Should render component header", () => {
//   render(<Contact />);

//   //Querying
//   const headerElement = screen.getByRole("heading");
//   // Assertion
//   expect(headerElement).toBeInTheDocument();
// });

// test("Should load button inside the Contact Component", () => {
//   render(<Contact />);

//   //Querying
//   const buttonElement = screen.getByRole("button");
//   // OR
//   const buttonElement1 = screen.getByText("Submit");
//   // console.log("Unit Test ", buttonElement);
//   // Assertion
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement1).toBeInTheDocument();
// });

// test("SHould load Input name inside the Contact Component", () => {
//   render(<Contact />);

//   // Querying
//   const inputName = screen.getByPlaceholderText("name");
//   // console.log("inputElement", inputName);

//   // Assertion
//   expect(inputName).toBeInTheDocument();
// });

// test("Should load 2 input boxes on the Contact component", () => {
//   render(<Contact />);
//   // Querying
//   const inputBoxes = screen.getAllByRole("textbox");

//   // console.log(inputBoxes.length);
//   // Assertion
//   expect(inputBoxes.length).toBe(2);
//   // OR
//   // expect(inputBoxes.length).not.toBe(3);
// });

// it === test

describe("Testing Contact component", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should render component header", () => {
    render(<Contact />);

    //Querying
    const headerElement = screen.getByRole("heading");
    // Assertion
    expect(headerElement).toBeInTheDocument();
  });

  it("Should load button inside the Contact Component", () => {
    render(<Contact />);

    //Querying
    const buttonElement = screen.getByRole("button");
    // OR
    const buttonElement1 = screen.getByText("Submit");
    // console.log("Unit Test ", buttonElement);
    // Assertion
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement1).toBeInTheDocument();
  });

  it("SHould load Input name inside the Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputName = screen.getByPlaceholderText("name");
    // console.log("inputElement", inputName);

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);
    // Assertion
    expect(inputBoxes.length).toBe(2);
    // OR
    // expect(inputBoxes.length).not.toBe(3);
  });
});

// describe("Testing Contact component", () => {
//   test("Should render component header", () => {
//     render(<Contact />);

//     //Querying
//     const headerElement = screen.getByRole("heading");
//     // Assertion
//     expect(headerElement).toBeInTheDocument();
//   });

//   test("Should load button inside the Contact Component", () => {
//     render(<Contact />);

//     //Querying
//     const buttonElement = screen.getByRole("button");
//     // OR
//     const buttonElement1 = screen.getByText("Submit");
//     // console.log("Unit Test ", buttonElement);
//     // Assertion
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement1).toBeInTheDocument();
//   });

//   test("SHould load Input name inside the Contact Component", () => {
//     render(<Contact />);

//     // Querying
//     const inputName = screen.getByPlaceholderText("name");
//     // console.log("inputElement", inputName);

//     // Assertion
//     expect(inputName).toBeInTheDocument();
//   });

//   test("Should load 2 input boxes on the Contact component", () => {
//     render(<Contact />);
//     // Querying
//     const inputBoxes = screen.getAllByRole("textbox");

//     // console.log(inputBoxes.length);
//     // Assertion
//     expect(inputBoxes.length).toBe(2);
//     // OR
//     // expect(inputBoxes.length).not.toBe(3);
//   });
// });
