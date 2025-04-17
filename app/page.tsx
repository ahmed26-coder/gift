'use client';

import { useState, useMemo, useCallback } from 'react';
import Motion from "./Components/Motion";
import Image from "next/image";
import Motions from './Components/Motions';
import ContactForm from './Components/ContactForm';

const data = [
  { name: 'whatsaPP', name2:"واتساب", name3:"واتس", link: 'https://wa.me/201158129004', logo: "/logo-whatsapp.png" },
  { name: "facebook", name2: "فيسبوك", name3: "فيس", link:"https://www.facebook.com/share/1FLv5XS9bh/", logo:"/Facebook-removebg-preview.webp" },
  { name: 'instagram', name2:"انستجرام", name3:"انستا", link: 'https://www.instagram.com/boshkashyoussef?igsh=MjluZmhudjZ5emNy', logo: "/instagram-removebg-preview.png" },
  { name: "snapchat", name2:"اسناب شات", name3:"اسناب", link: "https://www.snapchat.com/add/foxxxx1236?share_id=_0Tp0zoDaxw&locale=ar-AE", logo: "/sm-removebg-preview.png" },
  { name: "tiktok", name2:"تيك توك", name3:"تيك", link: "https://www.tiktok.com/@abnalakabrrr?_t=ZS-8vOodrOJcUm&_r=1", logo: "/aaa-removebg-preview.png" },
  { name: "telegram", name2:"تيلجرام", name3:"تلي", link: "https://t.me/+201158129004", logo: "/tele.webp" },
  { name: "phone", name2:"تلفون", name3:"فون", link:"01158129004", logo:"01158129004" }
];

const ResultCard = ({ result }: { result: string }) => {
  const matchedApp = useMemo(() => data.find(item => item.link === result), [result]);

  if (!result.startsWith('http')) {
    return <span className="text-red-500">{result}</span>;
  }

  return (
    <a
      href={result}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center border-2 border-gray-400 rounded-4xl w-60 hover:shadow-lg transition hover:scale-105 bg-white"
    >
      {matchedApp?.logo ? (
        <Image
          src={matchedApp.logo}
          alt={matchedApp.name}
          width={250}
          height={250}
        />
      ) : (
        <p>No logo available</p>
      )}
    </a>
  );
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    const app = data.find((item) =>
      item.name.toLowerCase() === search.toLowerCase() ||
      item.name2.toLowerCase() === search.toLowerCase() ||
      item.name3.toLowerCase() === search.toLowerCase()
    );

    setResult(app ? app.link : 'There is no application with this name.');
  }, [search]);

  return (
    <main className="min-h-screen mt-10 flex flex-col items-center justify-center p-6 gap-10 text-center">
      <Motions />
      <div>
        <h1 className="text-lg lg:text-2xl font-bold lg:flex text-center items-center gap-2">
          Software Engineer
          <p className="flex items-center">
            <div className="loader mr-3">AbdulRahman</div>
            <Motion />
          </p>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <form onSubmit={handleSearch} className="flex w-full lg:w-[40%] items-center gap-3">
          <input
            type="text"
            placeholder="Type the application name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 pl-5 rounded-full border-2 border-gray-100 w-full outline-0 focus:border-blue-500 bg-gray-100"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
          >
            Search
          </button>
        </form>

        {result && <ResultCard result={result} />}
      </div>

      <ContactForm />
    </main>
  );
}
