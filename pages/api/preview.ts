import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // ...
  res.setPreviewData({}, {
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  })
  // ...
}
