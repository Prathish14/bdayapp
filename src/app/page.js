import Image from "next/image";
import GreetingCard from "./home";
import PhotoUploader from "./components/PhotoUploader";

export default function Home() {
  return (
    <GreetingCard />
  );
}

export function PhotoUploaderPage() {
  return <PhotoUploader />;
}
