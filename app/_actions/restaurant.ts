"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

export const favoriteRestaurant = async (
  userId: string,
  restaurantId: string,
) => {
  await db.userFavoriteRestaurant.create({
    data: {
      userId,
      restaurantId,
    },
  });

  revalidatePath("/");
};

export const unFavoriteRestaurant = async (
  userId: string,
  restaurantId: string,
) => {
  await db.userFavoriteRestaurant.delete({
    where: {
      userId_restaurantId: {
        userId,
        restaurantId,
      },
    },
  });

  revalidatePath("/");
};
