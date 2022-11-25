export interface ArticleItem {
  id: number | string;
  title: string;
  desc?: string;
  url: string;
  view: number;
  reply: number;
  pub_time: string;
  last_reply_time: string;
  publisher: {
    id: number | string;
    nick: string;
    avatar: string;
    department: string;
    signature: string;
  };
}
