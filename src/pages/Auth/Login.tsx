import LoginForm from "@/components/modules/Auth/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "/logo.svg"
import { Link } from "react-router";
export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <Link to={"/"} className="flex justify-center">
              <img className="w-16 h-16" src={logo} alt="" />
            </Link>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email and password below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
