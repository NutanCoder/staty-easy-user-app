import Card from "@/components/card";
import ProfileForm from "@/components/profile/ProfileForm";
import { supabaseServer } from "@/lib/supabaseServer";

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  avatar_url?: string;
}

export default async function ProfilePage() {
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  if (!user) return <div>You are not logged in</div>;

  const { data } = await supabaseServer
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (!data)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  const profile: UserProfile = {
    id: user.id,
    first_name: data.first_name || "",
    last_name: data.last_name || "",
    email: user.email || "",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, Country",
    bio: "Property enthusiast and real estate investor with 5 years of experience.",
    avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`,
  };

  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      <div className="mb-8 text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src={profile.avatar_url}
            alt={profile.first_name}
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{profile.first_name} {profile.last_name}</h1>
        <p className="text-gray-600">{profile.email}</p>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
          <ProfileForm
            initialData={{
              id: profile.id,
              first_name: profile.first_name,
              last_name: profile.last_name,
              email: profile.email,
            }}
          />
        </div>
      </Card>
    </div>
  );
}
