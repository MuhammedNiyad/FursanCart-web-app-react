// export type productData = {
//   brand: string;
//   category: string;
//   description: string;
//   discountPercentage: number;
//   id: number;
//   images: string[];
//   price: number;
//   rating: number;
//   stock: number;
//   thumbnail: string;
//   title: string;
//   type?: string;
// };


export type CategoryItems = {
  name: string;
  description: string;
  image: [];
  subCategories: [];
}

export type CategoryArray = CategoryItems[];


// product types
type ProductVariant = {
  id: string;
  name: string;
  value: string;
  sku: string;
  productId: string;
  stockQuantity: number;
  WishListItem: any; // Assuming no specific structure is provided for WishListItem
  images: Image[];
  Wishlist: boolean;
};

type DiscountPerQttItem = {
  id: string;
  discFlatAmnt: string;
  discPercent: string;
  qttFrom: number;
  qttTo: number;
};

type Image = {
  id: string;
  url: string;
};

type BelongsTo = {
  id: string;
  username: string;
  role: string;
};

type Brands = {
  id: string;
  name: string;
  image: Image[]; // Assuming no specific structure is provided for image
};

type Category = {
  id: string;
  name: string;
  image: Image[]; // Assuming no specific structure is provided for image
};

type SubCategory = {
  id: string;
  name: string;
  image: Image[]; // Assuming no specific structure is provided for image
};

export type ProductType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  subText:string,
  description: string;
  price: string;
  discountedAmount: string;
  stockQuantity: number;
  sku: string;
  slug: string;
  rating: number;
  weight: string;
  discount_percent: string;
  specifications: string;
  highlights: string;
  tags: Array<string>;
  returnDays: number;
  refund: boolean;
  replace: boolean;
  unit: string;
  brandsId: string;
  categoryId: string;
  subCategoryId: string;
  status: string;
  creatorId: string;
  madeBy: string;
  deleted: boolean;
  deletedBy: any | null; // Assuming no specific structure is provided for deletedBy
  referalBonus: string;
  belongsTo: BelongsTo;
  Brands: Brands;
  category: Category;
  discPerQtt: Array<DiscountPerQttItem>;
  images: Image[];
  Review: Array<any>; // Assuming no specific structure is provided for Review
  variants: Array<ProductVariant>;
  SubCategory: SubCategory;
};

export type DiscPerQtt = {
  id: string;
  createdAt: string;
  updatedAt: string;
  qttFrom: number;
  qttTo: number;
  discPercent: string;
  discFlatAmnt: string;
  productsId: string;
}

export type CartProduct = {
  id: string;
  createdAt: string;
  updatedAt: string;
  productVarientId: string;
  cartId: string;
  price: string;
  quantity: number;
  productVarient: ProductVariant;
}

export type CartType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  totalPrice: string;
  userId: string;
  CartProducts: CartProduct[];
}


export type CartItems = {
  userId: string;
  productId: string;
  quantity: number;
}