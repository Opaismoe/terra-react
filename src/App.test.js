import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BigTitle from './components/layout/BigTitle';
import ProjectFilters from './components/project/ProjectFilters';

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("BigTitle renders the correct text", () => {
  act(() => {
    render(<BigTitle title="hello world"/>, container);
  });
  expect(container.textContent).toBe("hello world");
});

// it("BProjectFilters component", () => {
//   act(() => {
//     render(<ProjectFilters filters={["filter-1","filter-2","filter-3"]}/>, container);
//   });
//   expect(container.textContent).toBe("hello world");
// });

