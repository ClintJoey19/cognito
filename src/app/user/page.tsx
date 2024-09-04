import { getUser } from "@/lib/getActions/user.action";
import Image from "next/image";

const page = async () => {
  const user = await getUser();

  return (
    <div>
      <p>User: {user?.name}</p>
      <p>First Name: {user?.given_name}</p>
      <p>Last Name: {user?.family_name}</p>
      <p>Email: {user?.email}</p>
      <Image
        src={user?.picture || ""}
        alt={user?.name || "profile"}
        height={100}
        width={100}
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};

export default page;
