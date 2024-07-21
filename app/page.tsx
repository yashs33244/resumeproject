import Image from "next/image";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";
import { authOptions } from './lib/auth';
import { getServerSession } from "next-auth";

const getUserDetails = async () => {
  const session = await getServerSession(authOptions); 
  return session;
}


export default async function Home() {
  const session = await getUserDetails(); 
  if (session?.user) {
    return (
      <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
        <Hero />
        <Steps />
      </main>
    )
  } 
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
       NOt logged in
    </main>
  );
}
