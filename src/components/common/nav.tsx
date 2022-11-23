import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import style from './nav.module.css';

const Nav = () => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log('values', values);
    if (values.word) {
      window.location.href = `/search?word=${values.word}`;
    }
  };

  return (
    <nav className={style.nav}>
      <div className="content">
        <Link href="/">KM</Link>
        <Link href="/q">乐问</Link>
        <Link href="/articles">文章</Link>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item name="word">
            <Input />
          </Form.Item>
          <Button htmlType="submit" onClick={handleSubmit}>
            搜索
          </Button>
        </Form>
      </div>
    </nav>
  );
};
export default Nav;
