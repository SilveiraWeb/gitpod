import { Request, Response, NextFunction } from "express";
import { verify } from  "jsonwebtoken";

export function ensureAutenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // receber o token
  const authToken = request.headers.authorization;
  console.log(authToken);

  // validar se token esta preenchido
  if (!authToken) {
    return response.status(401).json({ message: "Token is not found" });
  }

  // validar padroes do token e expiração
  const [] = authToken.split(" ");
  verify(authToken, "7d6425f0263d7ecc61438a378ea84d68");
  console.log(authToken);
  // recuperar info do usuario


  return next();
}
