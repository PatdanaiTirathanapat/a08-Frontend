"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";

const images = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div className={styles.banner}>
      <img
        src={images[index]}
        alt="Event Banner"
        className={styles.image}
        onClick={() => setIndex((index + 1) % images.length)}
      />
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>จองสถานที่จัดงานที่เหมาะสมสำหรับทุกโอกาสของคุณ</p>
        <button className={styles.button} onClick={() => router.push("/venueinfo/venue")}>
          Select Venue
        </button>
      </div>
    </div>
  );
};

export default Banner;
