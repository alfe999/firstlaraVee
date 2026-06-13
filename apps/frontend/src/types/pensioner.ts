export interface pensioners {
  id: number;
  serial_number: string;
  control_number: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  pension_account: string;
  rank: string;
  bank_name: string;
  monthly_pension: number;
  amount_centavos: number;
  retirement_date: Date;
  created_at: string;
  updated_at: string;
}

export type PensionerFormData = Omit<
  pensioners,
  "id" | "created_at" | "updated_at"
>;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
