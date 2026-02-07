import type { User } from "@/types/types";

interface Props {
  user: User;
}

const ProfileWorkEducation = ({ user }: Props) => {
  return (
    <div className="mt-10">
      <div className="text-lg">
        <p>
          <span className="text-muted-foreground">Job Title: </span>
          {user.company.title}
        </p>
        <p>
          <span className="text-muted-foreground">Department: </span>
          {user.company.department}
        </p>
        <p>
          <span className="text-muted-foreground">Company: </span>
          {user.company.name}
        </p>
        <p>
          <span className="text-muted-foreground">University: </span>
          {user.university}
        </p>
      </div>
    </div>
  );
};

export default ProfileWorkEducation;
