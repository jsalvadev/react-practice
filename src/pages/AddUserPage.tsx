import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { useMutate } from "../hooks/useMutate";
import { API_URL } from "../constants";

type FormData = {
  name: string;
  email: string;
  rememberMe: boolean;
};

export default function AddUserPage() {
  const nameId = useId();
  const emailId = useId();
  const rememberMeId = useId();

  const initialFormData = {
    name: "",
    email: "",
    rememberMe: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const { mutate, data, error, loading } = useMutate(`${API_URL}/users`);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Loading:", loading);
    mutate(formData);
  };

  const handleClear = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs rounded">
        <form onSubmit={handleSubmit}>
          <h5 className="text-xl font-semibold text-heading mb-6">
            Create User
          </h5>

          <div className="mb-4">
            <label
              htmlFor={nameId}
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Name
            </label>
            <input
              type="text"
              id={nameId}
              className="rounded bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-white focus:border-white block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              required
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </div>

          <div>
            <label
              htmlFor={emailId}
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Email
            </label>
            <input
              type="email"
              id={emailId}
              className="rounded bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-white focus:border-white block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="flex items-start my-6">
            <div className="flex items-center">
              <input
                id={rememberMeId}
                type="checkbox"
                checked={formData.rememberMe}
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-white-soft"
                onChange={handleChange}
                name="rememberMe"
              />
              <label
                htmlFor={rememberMeId}
                className="ms-2 text-sm font-medium text-heading"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="rounded text-white bg-white/20 box-border border border-transparent hover:bg-white/30 focus:ring-4 focus:ring-white-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="rounded text-white bg-white/40 box-border border border-transparent hover:bg-white/50 focus:ring-4 focus:ring-white-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}
