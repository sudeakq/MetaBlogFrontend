import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import BlogCard from "@/components/BlogCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <Navbar />
    <BlogCard
     imageSrc="/FirstPageBanner.png"
     userimageSrc="/RandomUser.png"
     category="Technology"
     title="The Impact of Technology on the Workplace: How Technology is Changing"
     author="Jason Francisco"
     date="August 20, 2022"/>
  </div>
  );
}
