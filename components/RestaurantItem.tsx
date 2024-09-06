import { IRestaurant } from "@/types";
import Image from "next/image";
import Link from "next/link";

const RestaurantItem = (props: IRestaurant) => {
  const { id, name, locationText, youtubers } = props;
  return (
    <Link key={`${id}-item`} href={`/r/${id}`}>
      <div>{name}</div>
      <div>{locationText}</div>
      <div>추천 유튜버 목록</div>
      <ul>
        {youtubers.map((el) => {
          return (
            <li key={el.id}>
              <Image
                src={el.profileImage}
                width={56}
                height={56}
                alt={el.channelName}
              />
              <span>{el.channelName}</span>
              <Link href={`/y/${el.id}`}>자세히 보기</Link>
            </li>
          );
        })}
      </ul>
    </Link>
  );
};

export default RestaurantItem;
