// Generated with util/create-component.js

import React from "react";

import { render } from "@testing-library/react";

import Pagination from "./Pagination";

import { PaginationProps } from "./Pagination.types";

describe("Pagination Suite", () => {
  let props: PaginationProps;

  beforeEach(() => {
    props = {
      data: [
        {
          current: false,
          pageNumber: 1,
          href: "#",
        },
        {
          current: true,
          pageNumber: 2,
          href: "#",
        },
        {
          current: false,
          pageNumber: 3,
          href: "#",
        },
      ],
    };
  });

  const renderComponent = () => render(<Pagination {...props} />);

  it("base should render the correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Pagination");

    expect(component).toHaveClass("dcui-pagination");
  });

  it("wrapper should render the correct class", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("PaginationWrapper");

    expect(component).toHaveClass("dcui-pagination__wrapper");
  });

  it("button should render the correct class", () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId("PaginationButton");

    expect(components[0]).toHaveClass("dcui-pagination__button");
  });

  it("button should render the correct class", () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId("PaginationButton");

    expect(components[0]).toHaveTextContent("1");
  });

  it("second button should render the current class", () => {
    const { getAllByTestId } = renderComponent();

    const components = getAllByTestId("PaginationButton");

    expect(components[1]).toHaveClass("dcui-pagination__button--current");
  });
});
