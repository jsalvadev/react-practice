import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../constants";
import type { User } from "../types/user";

export default function UserDetailPage() {
  const { userId } = useParams();

  const { data: user, error, loading } = useFetch<User>(`${API_URL}/${userId}`);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white/20 block max-w-sm p-6 rounded">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        {user?.name}
      </h5>
      <p className="text-body text-gray-300">Address</p>
      <span>{user?.address?.street}</span>
      <span>{user?.address?.city}</span>
      <span>{user?.address?.zipcode}</span>
      <span>{user?.address.geo?.lat}</span>
      <span>{user?.address.geo?.lng}</span>

      <hr className="my-4" />

      <p className="text-body text-gray-300">Company</p>
      <span>{user?.company.name}</span>
      <span>{user?.company.catchPhrase}</span>
      <span>{user?.company.bs}</span>
    </div>
  );
}
