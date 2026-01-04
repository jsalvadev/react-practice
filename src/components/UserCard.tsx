import { Link } from "react-router";
import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded shadow-xs">
      <h5 className="mb-1 text-2xl font-semibold tracking-tight text-heading leading-8">
        {user.name}
      </h5>
      <p className="text-body mb-6">{user.email}</p>
      <Link
        to={`/user/${user.id}`}
        className="rounded inline-flex items-center text-white bg-white/30 box-border border border-transparent hover:bg-white/20 focus:ring-4 focus:ring-white/20-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Read more
      </Link>
    </div>
  );
}
