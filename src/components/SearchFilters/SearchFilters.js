import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { Grid, Link } from "@mui/material";
import styled from "./SearchFilters.module.css";
import { Box, Button } from "@mui/material";
import { FormInput, FormSelect, FormRange, CheckboxInput } from "../index";
import { sortArray } from "../../utilis";

const SearchFilters = () => {
  const { meta, params } = useLoaderData();
  const { search, companyValue, categoryValue, order, price, shipping } =
    params;
  const categories = meta.categories;
  const company = meta.companies;

  return (
    <Form className={styled.formBox}>
      <Grid
        container
        lg={12}
        gap={3}
        sx={{ display: "flex", padding: "1rem", alignItems: "center" }}
      >
        <FormInput
          type="search"
          label="Search product"
          name="search"
          variant="outlined"
          width={280}
          defaultValue={search}
        />
        <FormSelect
          label="Category"
          name="category"
          list={categories}
          width={280}
          defaultValue={categoryValue}
        />
        <FormSelect
          label="Companies"
          name="company"
          list={company}
          defaultValue={companyValue}
          width={280}
        />
        <FormSelect
          label="Sort by"
          name="order"
          list={sortArray}
          defaultValue={order}
          width={280}
        />
        <FormRange name="price" width={250} size="medium" price={price} />
        <CheckboxInput
          defaultValue={shipping}
          name="shipping"
          label="Free shipping"
        />
        <Box>
          <Button
            sx={{ marginRight: "1rem" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
          <Button type="button" variant="contained" color="secondary">
            <Link className={styled.linkBtn} href="/products">
              Reset
            </Link>
          </Button>
        </Box>
      </Grid>
    </Form>
  );
};

export default SearchFilters;
