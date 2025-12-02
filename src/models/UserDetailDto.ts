export interface RegistrationRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "student" | "lecturer" | "admin";
}
