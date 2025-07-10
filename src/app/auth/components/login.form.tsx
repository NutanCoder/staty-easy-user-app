import Button from "@/components/button";
import Input from "@/components/input";
import { loginAction } from "../actions";

function LoginFeature() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
      <form className="space-y-4" action={loginAction}>
        <Input
          label="Email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter Email"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginFeature;
