import Image from "next/image";
import InputPlayer from "@/components/InputPlayer";

export default function PlayersPage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-40 p-24">
      <h1 className="text-5xl font-bold">Write your ID</h1>
      <InputPlayer />
      a
      <Image width={500} height={400} src={'/id.webp'} alt="" />
    </div>
  );
}
