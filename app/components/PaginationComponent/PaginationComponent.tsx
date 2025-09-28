'use client';

import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

interface Props {
  path: string;
  currentPage: number;
  total: number;
}

const PaginationComponent = ({ path, currentPage, total }: Props) => {
  const router = useRouter();

  const onChange = (page: number) => {
    router.push(`${path}?page=${page}`);
  };

  return (
    <Pagination
      className="!mt-5"
      current={currentPage}
      total={total}
      align="center"
      onChange={onChange}
      showSizeChanger={false}
    />
  );
};

export default PaginationComponent;
