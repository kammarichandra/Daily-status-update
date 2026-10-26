import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import useFetch from "../Hooks/Usefetch";

describe("useFetch Testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches data successfully", async () => {
    const mockData = [
      { id: 1, name: "Chandra" },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData,
      })
    );

    const { result } = renderHook(() =>
      useFetch("/api/employees")
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it("handles API errors", async () => {
    vi.stubGlobal("fetch",vi.fn().mockRejectedValue(
        new Error("Network Error")
      )
    );

    const { result } = renderHook(() =>
      useFetch("/api/employees")
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Network Error");
  });
});