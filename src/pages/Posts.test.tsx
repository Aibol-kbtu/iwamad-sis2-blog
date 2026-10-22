import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router";
import Posts from "./Posts";
import { LikesProvider } from "../context/LikesContext";
import { posts } from '../data/post';

describe("Posts", () => {
  it("renders one card for each post", () => {
    render(
      <MemoryRouter>
        <LikesProvider>
          <Posts />
        </LikesProvider>
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("listitem");

    expect(cards).toHaveLength(posts.length);
  });
});