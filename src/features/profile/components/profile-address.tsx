import type { User } from "@/types/types";

interface Props {
  user: User;
}

const ProfileAddress = ({ user }: Props) => {
  return (
    <div className="mt-10">
      <div className="text-lg">
        <p>
          <span className="text-muted-foreground">City: </span>
          {user.address.city}
        </p>
        <p>
          <span className="text-muted-foreground">State: </span>
          {user.address.state} ({user.address.stateCode})
        </p>
        <p>
          <span className="text-muted-foreground">Postal Code: </span>
          {user.address.postalCode}
        </p>
      </div>
    </div>
  );
};

export default ProfileAddress;
