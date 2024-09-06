/**
 * 식당 등록시 사용되는 페이지
 */

import InputField from "@/components/InputField";
import { useYoutuber } from "@/store";
import { RestaurantEditableField, TYoutuber } from "@/types";
import Image from "next/image";
import { useState } from "react";

const STRINGTYPE_INPUT_FIELDS = [
  {
    label: "식당 이름",
    key: "name",
    required: true,
  },
  {
    label: "도로명 주소",
    key: "locationText",
    required: true,
  },
  {
    label: "카테고리(예: 한식)",
    key: "category",
    required: true,
  },
  {
    label: "카카오맵 주소",
    key: "kakaomapUrl",
    required: false,
  },
  {
    label: "네이버맵 주소",
    key: "navermapUrl",
    required: false,
  },
  {
    label: "홈페이지 주소",
    key: "homepageUrl",
    required: false,
  },
];

const CreatePage = () => {
  const { list } = useYoutuber();

  const [restaurant, setRestaurant] = useState<RestaurantEditableField>({
    name: "",
    locationText: "",
    category: "",
    kakaomapUrl: "",
    navermapUrl: "",
    homepageUrl: "",
    latitude: "",
    longitude: "",
    menu: [],
    youtubers: [], //muiti select
  });
  return (
    <div className="">
      {STRINGTYPE_INPUT_FIELDS.map((el) => (
        <InputField
          label={el.label}
          //@ts-ignore
          value={restaurant[el.key as keyof RestaurantEditableField]}
          onChange={(value) => {
            setRestaurant((prev) => ({
              ...prev,
              [el.key]: value,
            }));
          }}
        />
      ))}
      {list.map((el: TYoutuber) => {
        return (
          <label key={`${el.id}-checkbox`} htmlFor={el.id}>
            <input type="checkbox" key={el.id} onChange={(e) => {}} />;
            <Image
              src={el.profileImage}
              width={48}
              height={48}
              alt={el.channelName}
            />
            <div>{el.channelName}</div>
          </label>
        );
      })}
    </div>
  );
};

export default CreatePage;
