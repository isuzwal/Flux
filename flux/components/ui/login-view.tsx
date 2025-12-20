"use client";
import Link from "next/link";

import { useState } from "react";
import { LoginGoogle } from "@/lib/client";
import { Loader, Lock, Mail } from "lucide-react";
import { authClient } from "@/lib/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EmailValidationAction } from "@/lib/action";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [laoding, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setLoading(true);
    try {
      if (!email.trim() || !password) {
        toast.error("Please fill in all fields.");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        setLoading(false);
        return;
      }
      // validate email exists
      const { exists } = await EmailValidationAction(email);

      if (exists) {
        toast.error(
          "Email is already registered. Please use a different email."
        );
        setLoading(false);
        return;
      }
      const response = await authClient.signIn.email({
        email: email.trim(),
        password: password,
      });
      if (response.error) {
        toast.error(
          response?.error?.message || "Login failed. Please try again."
        );
        return;
      }
      toast.success("Login successful ");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      const error = err as Error;
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const GoogleSetup = async () => {
    await LoginGoogle();
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-1">
      <div className=" border bg-white border-slate-200 dark:border-neutral-900 rounded-lg dark:bg-neutral-950 flex  gap-4 items-center justify-center max-w-md w-full mx-auto  p-4">
        <RightSide
          GoogleSetup={GoogleSetup}
          handleLogin={handleLogin}
          laoding={laoding}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </div>
    </div>
  );
};

interface RightSideProps {
  GoogleSetup: () => Promise<void>;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  laoding: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}
const RightSide = ({
  GoogleSetup,
  handleLogin,
  laoding,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: RightSideProps) => {
  return (
    <div className="  w-full flex-1 flex flex-col gap-2   ">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome back to Flux
        </h2>
        <p className="text-slate-500 text-sm">
          Join over 10,000+ creators building on Flux
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={GoogleSetup}
          className="rounded-md border-[1.5px] dark:border-neutral-800 dark:bg-neutral-900 bg-white
         flex items-center justify-center
          border-slate-200
          
          hover:bg-slate-50
          hover:border-slate-300
         
          py-2 px-4   dark:shadow-[inset_1px_3px_6px_rgba(45,45,50,0.5)] transition-all duration-300 gap-2  cursor-pointer dark:hover:bg-neutral-900/80  w-full "
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="none" fillRule="evenodd" clipRule="evenodd">
              <path
                fill="#F44336"
                d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                opacity=".987"
              />
              <path
                fill="#FFC107"
                d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                opacity=".997"
              />
              <path
                fill="#448AFF"
                d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                opacity=".999"
              />
              <path
                fill="#43A047"
                d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                opacity=".993"
              />
            </g>
          </svg>
          <span className="text-[14px] font-medium font-sans  dark:text-neutral-400 text-neutral-700">
            Login with Google{" "}
          </span>
        </button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <div className="h-px  rounded flex-1 dark:bg-neutral-700 bg-neutral-300"></div>
        <span className="text-neutral-500 text-sm font-sans">or via email</span>
        <div className="h-px  rounded flex-1 dark:bg-neutral-700 bg-neutral-300"></div>
      </div>
      <div>
        <form className="flex flex-col gap-2 ">
          <div className="flex flex-col ">
            <h1 className="font-semibold px-1 font-sans  text-[14px]">Email</h1>
            <div>
              <label className="font-medium font-sans text-sm mb-2  border-[1.5px] dark:border-neutral-800 h-full w-full   flex gap-1 rounded-lg dark:bg-neutral-800/50 bg-slate-50/50  border-slate-200 focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400/50 transition-colors">
                <Mail className="size-5 text-neutral-500 ml-3 mt-2" />
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="  py-1.5 px-2 max-w-md w-full mx-auto  placeholder:text-neutral-500 font-medium text-[16px]  focus-visible:outline-none focus-visible:ring-0"
                  placeholder="johondoe@email.com"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-semibold px-1 font-sans  text-[14px]">
              Password
            </h1>
            <div>
              <label className="font-medium font-sans text-sm mb-2  border-[1.5px] dark:border-neutral-800 h-full w-full   flex gap-1 rounded-lg dark:bg-neutral-800/50  bg-slate-50/50  border-slate-200 focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400/50 transition-colors">
                <Lock className="size-5 text-neutral-500 ml-3 mt-2" />
                <input
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="  py-1.5 px-2 max-w-md w-full mx-auto placeholder:font-semibold   placeholder:text-neutral-500 font-medium text-[16px]  focus-visible:outline-none focus-visible:ring-0"
                  placeholder="......."
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-semibold  px-1 font-sans  text-[14px]">
              Confirm Password
            </h1>
            <div>
              <label className="font-medium font-sans text-sm mb-2  border-[1.5px] dark:border-neutral-800 h-full w-full placeholder:font-semibold   flex gap-1 rounded-lg dark:bg-neutral-800/50  bg-slate-50/50  border-slate-200 focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400/50 transition-colors">
                <Lock className="size-5 text-neutral-500 ml-3 mt-2" />
                <input
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="  py-1.5 px-2 max-w-md w-full mx-auto  placeholder:text-neutral-500 placeholder:font-semibold font-medium flex items-center  justify-center text-[16px]  focus-visible:outline-none focus-visible:ring-0"
                  placeholder="......."
                />
              </label>
            </div>
            <p className="text-[11px] text-slate-400 ml-1">
              Must be at least 8 characters long
            </p>
          </div>
          <button
            type="submit"
            onClick={(e) =>
              handleLogin(e as unknown as React.FormEvent<HTMLFormElement>)
            }
            disabled={laoding}
            className="rounded-md p-1 text-neutral-50 font-semibold   bg-green-500 hover:bg-green-600  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {laoding ? (
              <p className="flex items-center justify-center gap-2">
                Login to account
                <Loader className="animate-spin size-4 " />
              </p>
            ) : (
              "Login "
            )}
          </button>
          <p className="text-center text-sm text-slate-500 pt-2">
            New to Flux ?{" "}
            <Link
              href="/register"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
