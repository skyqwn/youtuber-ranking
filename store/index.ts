import { IRestaurant, IRestaurantHistory, TYoutuber } from "@/types";
import { create } from "zustand";

type restaurantState = {
  list: IRestaurant[];
};

const useRestourantList = create<restaurantState>((set) => ({
  list: [],
  add: (item: IRestaurant) =>
    set((state: any) => ({
      list: [...state.list, item],
    })),
  addHistory: (item: IRestaurantHistory) => set((state: any) => ({})),
}));

const useUser = create((set) => ({
  id: "",
  nickname: "",
  createdAt: "",
  // profileImageUrl:"" 서비스 비용측면상 못 넣습니다.
  login: (user: any) =>
    set(() => ({
      id: user.id,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })),
  logout: () =>
    set(() => ({
      id: "",
      nickname: "",
      createdAt: "",
      updatedAt: "",
    })),
  editNickname: (nickname: string) =>
    set(() => ({
      nickname,
    })),
}));

type youtuberState = {
  list: TYoutuber[];
};

const useYoutuber = create<youtuberState>((set) => ({
  list: [],
  init: (list: TYoutuber[]) =>
    set(() => ({
      list,
    })),
}));

export { useRestourantList, useUser, useYoutuber };
