"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Header from "@/components/nestable/Header";
import Hero from "@/components/nestable/Hero";
import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";


const components = {
  "page": Page,
"grid": Grid,
"header": Header,
  "hero": Hero,
  "imageWithText":ImageWithText
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}