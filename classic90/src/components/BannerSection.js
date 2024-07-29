"use client";
import styles from "./banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import bannerPic from "#/banner1.jpg";

export default function BannerSection() {
  return (
    <div className={styles.banner_section}>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={bannerPic} alt="banner image" priority={true} />
    </div>
  );
}
