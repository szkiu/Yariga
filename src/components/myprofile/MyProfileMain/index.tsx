"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import UserProfile from "@/components/common/UserProfile";
import { useSelector } from "react-redux";

function MyProfileMain() {
  const user = useSelector((state: any) => state.user);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log(user, "eff");
    }, 1000);
  }, [user]);

  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-zinc-800/90">My Profile</h1>

      <UserProfile user={user} />
    </section>
  );
}

export default MyProfileMain;
