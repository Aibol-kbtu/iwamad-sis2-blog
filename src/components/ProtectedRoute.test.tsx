
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter, Routes, Route } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

describe("ProtectedRoute", () => {
  it("shows Sign in when the user is signed out", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <AuthProvider>
          <Routes>
            <Route
              path="/signin"
              element={<h1>Sign in page</h1>}
            />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<h1>Dashboard</h1>}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Sign in page")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Dashboard")
    ).not.toBeInTheDocument();
  });
});
