import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";
import { authOptions } from "../_lib/auth";

const RestaurantList = async () => {
  const session = await getServerSession(authOptions);

  //PEGAR RESTAURANTES COM MAIOR NUMERO DE PEDIDOS...
  const restaurants = await db.restaurant.findMany({
    take: 10,
  });

  const UserFavoriteRestaurants = await db.userFavoriteRestaurant.findMany({
    where: { userId: session?.user?.id },
  });

  return (
    <>
      <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            userId={session?.user?.id}
            UserFavoriteRestaurants={UserFavoriteRestaurants}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
