import type { User } from "@/types/types";

interface Props {
  user: User;
}

const ProfileOverview = ({ user }: Props) => {
  return (
    <div className="mt-10 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6">
      {/* Avatar */}
      <div className="flex justify-center md:justify-end">
        <img
          src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="space-y-1 text-center md:text-left">
        <h1 className="text-xl font-semibold">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-muted-foreground">@{user.username}</p>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.phone}</p>
      </div>
    </div>
  );
};

export default ProfileOverview;
