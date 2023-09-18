import React from "react";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Trash } from "lucide-react";

import { Heading } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { SettingsForm } from "./components/setting-form";

interface SettingPageProps {
  params: {
    storeId: string;
  };
}

const Settingpage: React.FC<SettingPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default Settingpage;