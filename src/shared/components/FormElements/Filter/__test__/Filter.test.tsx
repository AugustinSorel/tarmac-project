import { render } from "@testing-library/react";
import Filter from "..";

describe("Filter", () => {
  test("should render the correct amount of options", () => {
    render(
      <Filter
        data={["Apple", "Banana", "Orange"]}
        title="fruits"
        filterHandler={() => null}
      />
    );

    expect(document.querySelectorAll("option").length).toBe(3);
  });
});
