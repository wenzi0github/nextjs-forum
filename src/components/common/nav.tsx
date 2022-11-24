import { Button, Dropdown, Form, Input } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import style from './nav.module.css';

const Nav = () => {
  const [form] = Form.useForm();

  const userInfoMenu = [
    {
      key: 'me',
      label: <Link href="https://www.xiabingbao.com">个人中心</Link>,
    },
    {
      key: 'pub-article',
      label: <Link href="https://www.xiabingbao.com">发表文章</Link>,
    },
    {
      key: 'pub-q',
      label: <Link href="https://www.xiabingbao.com">提出问题</Link>,
    },
    {
      key: 'vote',
      label: <Link href="https://www.xiabingbao.com">发起投票</Link>,
    },
  ];

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log('values', values);
    if (values.word) {
      window.location.href = `/search?word=${values.word}`;
    }
  };

  return (
    <nav className={style.nav}>
      <div className={classNames('content', style.content)}>
        <div className={style.link}>
          <Link href="/">KM</Link>
          <Link href="/q">乐问</Link>
          <Link href="/articles">文章</Link>
        </div>
        <div className={style.search}>
          <Form className={style['search-form']} form={form} onFinish={handleSubmit}>
            <Form.Item className={style['search-form-item']} name="word">
              <Input placeholder="请搜索" />
            </Form.Item>
            <Button htmlType="submit" onClick={handleSubmit}>
              搜索
            </Button>
          </Form>
        </div>
        <div className={style.user}>
          <Dropdown menu={{ items: userInfoMenu }}>
            <div className={style.userinfo}>
              <Image
                className="avatar"
                src="https://www.xiabingbao.com/upload/397362636d1292613.jpeg"
                width={20}
                height={20}
                style={{ borderRadius: '50%' }}
                alt="avatar"
              />
              <span>帅小丘</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
