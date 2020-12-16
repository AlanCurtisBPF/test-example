// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, fireEvent, screen, cleanup } from "../../tests/test-utils";
import Counter from "./Counter";

describe("Counter Comp", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render with given state from Redux store", () => {
    const { getByTestId } = render(<Counter />);
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
  });

  it("should dispatch action increment on button click", () => {
    const { getByText, getByTestId } = render(<Counter />);
    fireEvent.click(getByText("+"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("1");
  });

  it("should dispatch an action decrement on button click", () => {
    const { getByText, getByTestId } = render(<Counter />);
    fireEvent.click(getByText("-"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("-1");
  });

  it("should dispatch an action reset on button click", () => {
    const { getByText, getByTestId } = render(<Counter />);
    fireEvent.click(getByText("reset"));
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
  });

  it("should change input margin", () => {
    const { getByTestId } = render(<Counter />);
    const input = getByTestId("margin");
    fireEvent.change(input, { target: { value: 4 } });
    const actual = input.value;
    expect(actual).toBe("4");
  });

  it("should not allow letters to be inputted", () => {
    const { getByTestId } = render(<Counter />);
    const input = getByTestId("margin");
    expect(input.value).toBe("1"); // empty before
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input.value).toBe(""); //empty after
  });

  it("should change margin and update count on button push", () => {
    const { getByTestId, getByText } = render(<Counter />);
    // intial state before
    const input = getByTestId("margin");
    expect(input.value).toBe("1");
    const count = getByTestId("count").textContent;
    expect(count).toBe("0");
    // changes
    fireEvent.change(input, { target: { value: 5 } });
    expect(input.value).toBe("5");
    fireEvent.click(getByText("+"));
    // results
    const finalCount = getByTestId("count").textContent;
    expect(finalCount).toBe("5");
  });

  // todo: alan overide store intial state for testing from specific values
});
