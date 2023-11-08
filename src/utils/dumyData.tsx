import pic1 from "../../public/images/pizza.png";
import pic2 from "../../public/images/pic.png";
import user from "../../public/images/user.png";
import ownerImage from "../../public/images/owner.png";
import userRegImage from "../../public/images/registerd.png";

export const cartData: CartTypes[] = [
  {
    product: {
      id: 1,
      title: "product 1",
      description: "product 1 description",
      coverImage: pic1,
    },
    price: 12,
    quantity: 3,
  },
  {
    product: {
      id: 2,
      title: "product 1",
      description: "product 1 description",
      coverImage: pic1,
    },
    price: 12,
    quantity: 1,
  },
];

export const products: ProductTypes[] = [
  {
    id: 1,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1, pic2],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 2,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic2],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 3,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 4,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 5,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 6,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 7,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
  {
    id: 8,
    title: "Home made Pizza",
    description: `air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the
 sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.`,
    category: "pizza",
    rate: 3.4,
    cookingTime: "50 min",
    discount: 20,
    Availability: "available",
    spiceLevel: "meduim",
    size: "large",
    coverImage: pic1,
    images: [pic1, pic1, pic1, pic1],
    price: 234,
    numOfReview: 23,
    restaurant: "Naan Experts ",
  },
];

export const reviews: ReviewTypes[] = [
  {
    id: 1,
    content: "goood foood",
    date: "1/2/2033",
    user: {
      profileImg: user,
      id: 1,
      name: "salama naief",
    },
    rate: 4,
  },
  {
    id: 2,
    content: "goood foood",
    date: "1/2/2033",
    user: {
      profileImg: user,
      id: 1,
      name: "salama naief",
    },
    rate: 5,
  },
  {
    id: 3,
    content: "goood foood",
    date: "1/2/2033",
    user: {
      profileImg: user,
      id: 1,
      name: "salama naief",
    },
    rate: 4.4,
  },
  {
    id: 4,
    content: "goood foood",
    date: "1/2/2033",
    user: {
      profileImg: user,
      id: 1,
      name: "salama naief",
    },
    rate: 4.8,
  },
];

export const teamUsers = [
  {
    id: 1,
    name: "Iresha Samarakoon",
    role: "owner",
    email: "Iresha@gmail.com",
    img: ownerImage,
  },
  {
    id: 2,
    name: "Gauri Asok Kumar",
    role: "member",
    email: "Gauri@gmail.com",
    img: userRegImage,
  },
];

export const orderData = [
  {
    id: 1,
    items: [
      {
        product: {
          id: 1,
          title: "product 1",
          description: "product 1 description",
          coverImage: pic1,
        },
        price: 12,
        quantity: 3,
      },
      {
        product: {
          id: 2,
          title: "product 2",
          description: "product 2 description",
          coverImage: pic2,
        },
        price: 12,
        quantity: 3,
      },
    ],
    totalPrice: 72,
    status: "complete",
    date: "23 Feb 2021, 08:28 PM",
    income: 70,
    from: {
      id: 1,
      name: "hassan",
      pic: user,
    },
  },
  {
    id: 2,
    items: [
      {
        product: {
          id: 1,
          title: "product 1",
          description: "product 1 description",
          coverImage: pic1,
        },
        price: 12,
        quantity: 3,
      },
      {
        product: {
          id: 2,
          title: "product 2",
          description: "product 2 description",
          coverImage: pic2,
        },
        price: 12,
        quantity: 3,
      },
    ],
    totalPrice: 72,
    status: "inprocess",
    date: "23 Feb 2021, 08:28 PM",
    income: 70,
    from: {
      id: 1,
      name: "hassan",
      pic: user,
    },
  },
  {
    id: 3,
    items: [
      {
        product: {
          id: 1,
          title: "product 1",
          description: "product 1 description",
          coverImage: pic1,
        },
        price: 12,
        quantity: 3,
      },
      {
        product: {
          id: 2,
          title: "product 2",
          description: "product 2 description",
          coverImage: pic2,
        },
        price: 12,
        quantity: 3,
      },
      {
        product: {
          id: 2,
          title: "product 2",
          description: "product 2 description",
          coverImage: pic2,
        },
        price: 12,
        quantity: 3,
      },
    ],
    totalPrice: 72,
    status: "canceled",
    date: "23 Feb 2021, 08:28 PM",
    income: 70,
    from: {
      id: 1,
      name: "hassan",
      pic: user,
    },
  },
];
