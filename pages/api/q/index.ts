// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  code: number;
  data: any;
};

const createUUID = () => {
  let id = 0;
  let lasttime = 0;

  return () => {
    const now = Date.now();
    if (now === lasttime) {
      id++;
      return `${now.toString(32)}${id.toString(32)}`;
    }
    id = 0;
    lasttime = now;
    return now.toString(32);
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const uuid = createUUID();

  const content =
    '宋代盛行的一种中国文学体裁，宋词是一种相对于古体诗的新体诗歌之一，为宋代儒客文人智慧精华，标志宋代文学的最高成就。宋词句子有长有短，便于歌唱。因是合乐的歌词，故又称曲子词、乐府、乐章、长短句、诗余、琴趣等。';
  const item = {
    id: 1,
    title: 'nodejs16的环境如何安装？',
    // content,
    desc: content.slice(0, 100),
    view: 123,
    reply: 234,
    pub_time: '2022/11/20 12:23',
    last_reply_time: '2022/11/20 12:23',
    publisher: {
      nick: '帅小丘',
      avatar: 'https://www.xiabingbao.com/upload/397362636d1292613.jpeg',
      department: '前端研发中心',
      signature: '',
    },
  };
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      ...item,
      id: uuid(),
    });
  }

  res.status(200).json({ code: 0, data });
}
