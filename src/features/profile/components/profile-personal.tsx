import type { User } from "@/types/types";

interface Props {
  user: User;
}

const ProfilePersonal = ({ user }: Props) => {
  return (
    <div className="mt-10">
      <div className="gap-4 text-lg">
        <p>
          <span className="text-muted-foreground">Gender: </span>
          {user.gender}
        </p>
        <p>
          <span className="text-muted-foreground">Birth Date: </span>
          {user.birthDate}
        </p>
        <p>
          <span className="text-muted-foreground">Age: </span>
          {user.age}
        </p>
        <p>
          <span className="text-muted-foreground">Blood Group: </span>
          {user.bloodGroup}
        </p>
      </div>
    </div>
  );
};

export default ProfilePersonal;
