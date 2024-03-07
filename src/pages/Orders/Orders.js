import React from "react";

import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../../utilis";
import { PaginationProducts, SectionTitle, OrderList } from "../../components";
export const loaderOrderList =
  (store) =>
  async ({ request }) => {
    const { user } = store.getState().user;

    if (!user) {
      toast.warning("User must be login");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response, "order");
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Something went wrong, try again";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }
    console.log(params, "params");
  };

const Orders = () => {
  const { orders, meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrderList />
      <PaginationProducts />
    </>
  );
};

export default Orders;
