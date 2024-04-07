import type { Product } from "@/types/CustomComponents";
import tv_image_1 from "@/assets/img/product_1.png";
import tv_image_2 from "@/assets/img/product_2.png";
import tv_image_3 from "@/assets/img/product_3.png";
import tv_image_4 from "@/assets/img/product_4.png";

export const TV_LG: Product = {
  id: "i1m284-28473n-284nf4-28475f",
  brand: "LG",
  name: "LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR",
  images: [tv_image_1, tv_image_2, tv_image_3, tv_image_4],
  model: "OLED42C2PSA",
  availability: "Only 2 in Stock",
  price: "$600.72",
  lastPrice: "$800.00$",
  features: [
    "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
    "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
    "Hands-free Voice Control, Always Ready",
    "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
    "Eye Comfort Display: Low-Blue Light, Flicker-Free",
  ],
  types: [
    {
      label: "106 cm (42)",
      value: "106",
    },
    {
      label: "121 cm (48)",
      value: "121",
    },
    {
      label: "139 cm (55)",
      value: "139",
    },
    {
      label: "164 cm (65)",
      value: "164",
    },
    {
      label: "196 cm (77)",
      value: "196",
    },
    {
      label: "210 cm (83)",
      value: "210",
    },
  ],
  stars: 3,
  description: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers. 
  *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging. 
  **65C2 Stand model is at a minimum 39% lighter than the C1 series.`,
  specification:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at odio elit. Sed purus sapien, auctor id maximus id, hendrerit vel ex. Praesent sagittis erat nec metus mattis, et suscipit augue laoreet. Nulla cursus eros quis pulvinar auctor. Nullam efficitur purus a est luctus condimentum. Nunc at condimentum leo. Mauris eget est vitae odio semper aliquet. Praesent lobortis auctor leo quis porttitor. Proin id sapien non sapien rutrum euismod.",
  reviews:
    "Pellentesque dui eros, congue nec eros vitae, porta blandit magna. Nulla in dolor eu mauris facilisis finibus. Sed ut rutrum ante. Aliquam erat volutpat. Nunc malesuada vulputate eros, vel lacinia nulla maximus et. Proin vestibulum tempor libero, consectetur porta eros accumsan non. Ut suscipit faucibus massa.",
};
