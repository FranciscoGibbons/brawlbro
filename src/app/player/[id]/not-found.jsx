 import Link from "next/link";
 
 export default function NotFoundIdPage() {
   return (
     <div className="flex min-h-screen flex-col items-center gap-y-20 p-48">
       <h1 className="text-4xl font-bold">Player ID not found.</h1>
       <Link href="/player" className="text-xl text-amber-500 hover:opacity-85 transition duration-200">Go back</Link>
     </div>
   );
 }