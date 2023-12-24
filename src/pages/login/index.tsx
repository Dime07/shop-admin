import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { useAuth } from "@/context/authContext";
import { LoginFormSchemeType, loginFormScheme } from "@/schemes/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login } = useAuth();
  const form = useForm<LoginFormSchemeType>({
    resolver: zodResolver(loginFormScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: LoginFormSchemeType) => {
    console.log(values);
    // TODO add login function
    login();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border rounded-md py-4 px-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold">Hello 👋</h3>
          <p className="text-sm">
            You're an admin right ?? please input email and password
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="space-y-3 mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <p>Email</p>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <p>Password</p>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <div className="flex">
              <Button type="submit" className="bg-viridian-800 ml-auto">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
