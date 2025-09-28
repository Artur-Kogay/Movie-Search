'use client';
import { Alert, Card, Flex, Rate, Tag } from 'antd';
import Image from 'next/image';
import { Score } from '../ui';
import { FC, useEffect, useState } from 'react';
import { BASE_IMAGES_API } from '@/app/api/Base';
import { formattedDate } from '@/app/lib/utils/formattedDate';
import { truncateText } from '@/app/lib/utils/truncateText';
import { useAddRating } from '@/app/lib/hooks/useAddRating';

interface Props {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  id?: number;
  genres: string[];
}

const CardMovie: FC<Props> = ({ title, overview, poster_path, release_date, id, genres }) => {
  const [rate, setRate] = useState<number>(0);
  const { addMovieRating, error } = useAddRating();

  const handleChangeRate = (value: number) => {
    if (id != undefined) {
      sessionStorage.setItem(`${id} rate`, value.toString());
      addMovieRating(id, value);
      setRate(value);
    }
  };

  useEffect(() => {
    const rateItem = sessionStorage.getItem(`${id} rate`);
    if (rateItem) {
      setRate(Number(rateItem));
    }
  }, [id]);

  if (error) return <Alert message="Error" description={error} />;

  return (
    <Card classNames={{ body: '!p-0' }} variant="borderless" hoverable={true}>
      <div className="cursor-default grid grid-cols-[2fr_3fr] gap-1 max-md:grid-cols-[1fr_1fr_1fr_1fr] max-md:grid-rows-[auto_auto] max-md:!py-[10px] max-md:!px-[6px]">
        <div className="row-start-1 row-end-3 relative max-md:row-end-2 max-md:col-end-2 ">
          <Image src={`${BASE_IMAGES_API}${poster_path}`} fill sizes="100%" alt={title} />
        </div>
        <Flex
          justify="space-between"
          align="flex-start"
          className="!px-[9px] !pt-[10px] max-md:col-start-2 max-md:col-end-5"
        >
          <Flex vertical gap={'small'}>
            <h2 className="text-2xl font-normal max-md:text-xs">{title}</h2>
            <span className="text-xs text-[#827E7E] font-normal">
              {formattedDate(release_date)}
            </span>
            <Flex gap={'small'}>
              {genres.map((genre, index) => (
                <Tag key={index}>{genre}</Tag>
              ))}
            </Flex>
          </Flex>
          <Score value={rate} />
        </Flex>
        <Flex
          vertical
          gap={'small'}
          className="col-start-2 !mt-[7px] !px-[9px] !pb-[10px] max-md:col-start-1 max-md:col-end-5"
        >
          <p className="text-xs/[22px]">{truncateText(overview, 150)}</p>
          <Rate
            className="max-md:self-end"
            allowHalf
            count={10}
            value={rate}
            onChange={handleChangeRate}
          />
        </Flex>
      </div>
    </Card>
  );
};

export default CardMovie;
