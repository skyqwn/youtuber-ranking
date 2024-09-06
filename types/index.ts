type TMenu = {
  name: string; //메뉴의 이름
  price: number;
  imageSrc?: string; // 메뉴 이미지
  category: string; // 양식, 한식 ,일식
};

export type RestaurantEditableField = {
  name: string; // 식당의 이름
  menu: TMenu[]; // 해당 영상에서 추천된 메뉴들
  locationText: string; // 도로명 주소 텍스트
  category: string; // 식당 차원에서의 카테고리(한식,일식..)
  kakaomapUrl?: string;
  navermapUrl?: string;
  homepageUrl?: string;
  latitude?: string;
  longitude?: string;
  youtubers: TYoutuber[];
};

export interface IRestaurantHistory extends RestaurantEditableField {
  id: string;
  authorId: string;
}

export interface IRestaurant extends RestaurantEditableField {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  history: IRestaurantHistory[]; // 변경된 레코드
}

export type TYoutuber = {
  id: string;
  channelName: string; // 채널 이름
  channelUrl: string; // 채널 URL주소
  subscriber: number;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
};
