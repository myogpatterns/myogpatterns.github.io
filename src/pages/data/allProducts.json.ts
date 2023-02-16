import allProducts from "@/assets/db/allproducts.json";

const products = allProducts
  .map((product) => {
    let productSizes = "";

    if (typeof product.sizes === "string") {
      productSizes = product.sizes.replace(",", ", ");
    } else if (Array.isArray(product.sizes)) {
      productSizes = product.sizes.join(", ");
    }

    return {
      ...product,
      productSizes,
    };
  })
  //Limit to only fields used
  .map(
    ({
      id,
      title,
      productSizes,
      url,
      vendorImg,
      productImg,
      product_type,
      vendor,
    }) => ({
      id,
      title,
      productSizes,
      url,
      vendorImg,
      vendor,
      product_type,
      productImg,
    })
  )
  .sort((a, b) => a.title.localeCompare(b.title));

export type Product = (typeof products)[number];

export async function get() {
  return {
    body: JSON.stringify(products),
  };
}
