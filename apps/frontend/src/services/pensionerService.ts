import type {
  pensioners,
  PensionerFormData,
  ApiResponse,
} from "../types/pensioner";

const BASE_URL = "http://localhost:8000/api";

export async function fetchAllPensioners(): Promise<pensioners[]> {
  const response = await fetch(`${BASE_URL}/pensioner`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load pensioners.`,
    );
  }
  const json: ApiResponse<pensioners[]> = await response.json();
  return json.data;
}

export async function createPensioner(
  pensionerData: PensionerFormData,
): Promise<pensioners> {
  console.log("Creating Pensioner with data:", pensionerData); // Debug log
  const response = await fetch(`${BASE_URL}/pensioner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pensionerData),
  });
  if (!response.ok) {
    throw new Error(
      `Server error: ${response.status} - Could not create pensioner.`,
    );
  }
  const json: ApiResponse<pensioners> = await response.json();
  return json.data;
}

export async function fetchPensionerById(id: number): Promise<pensioners> {
  const response = await fetch(`${BASE_URL}/pensioner/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    //200
    throw new Error(
      `Server error: ${response.status} - Could not load pensioner.`,
    );
  }

  const json: ApiResponse<pensioners> = await response.json();
  return json.data;
}
