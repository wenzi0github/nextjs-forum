import { useRouter } from 'next/router';

const Info = () => {
  const router = useRouter();
  const { qid } = router.query;

  return <p>question id: {qid}</p>;
};
export default Info;
