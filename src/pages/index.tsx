import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-28">
        <BlogCard
          imageSrc="/FirstPageBanner.png"
          userimageSrc="/RandomUser.png"
          category="Technology"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
          author="Jason Francisco"
          date="August 20, 2022"
        />
      </div>
    </div>
  );
}
