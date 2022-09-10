import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string
}

const hello = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ name: 'Hello, world!' });
};

export default hello;
