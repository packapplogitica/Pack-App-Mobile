import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const host = `https://${req?.headers.host}`;

  res.redirect(`${host}/account/sign-out`);
};