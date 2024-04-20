import { render } from "@testing-library/react";
import Clients from "./src/components/Clients";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Reviews from "./src/components/Reviews";
import Services from "./src/components/Services";
import Works from "./src/components//Works";


describe("Clients component", () => {
  test("renders without crashing", () => {
    render(<Clients />);
  });
});

describe("Footer component", () => {
  test("renders without crashing", () => {
    render(<Footer />);
  });
});

describe("Header component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });
});

describe("Hero component", () => {
  test("renders without crashing", () => {
    render(<Hero />);
  });
});

describe("Reviews component", () => {
  test("renders without crashing", () => {
    render(<Reviews />);
  });
});

describe("Services component", () => {
  test("renders without crashing", () => {
    render(<Services />);
  });
});

describe("Works component", () => {
  test("renders without crashing", () => {
    render(<Works />);
  });
});
