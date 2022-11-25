import { useRouter } from 'next/router';

const Info = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pid = slug ? String(slug).replace('.html', '') : '';

  return <p>question id: {pid}</p>;
};
export default Info;
