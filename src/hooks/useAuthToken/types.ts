export interface AuthToken {
  token: string;
  expiresOn: number;
  isActive?: boolean | undefined;
}
