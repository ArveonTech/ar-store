import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Activity } from "react";
import { Spinner } from "./ui/spinner";
import type { PropsLoginForm } from "@/features/login/types";

export function LoginForm({
  className,
  formLogin,
  handleChangeInput,
  handleSubmit,
  errorForm,
  showPassword,
  handleShowPassword,
  isLoadingCredentials,
  ...props
}: PropsLoginForm) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className={`text-center text-xl mb-3`}>
            Login to your account
          </CardTitle>
          <CardDescription className={`opacity-80`}>
            Enter your Username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Activity mode={errorForm ? "visible" : "hidden"}>
              <p className="text-center text-sm mb-5 text-red-500">
                {errorForm}
              </p>
            </Activity>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">username</FieldLabel>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  placeholder="m@example.com"
                  required
                  className={`placeholder:opacity-50`}
                  value={formLogin.username}
                  onChange={handleChangeInput}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="/username-verify"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="********"
                    required
                    autoComplete="current-password"
                    value={formLogin.password}
                    onChange={handleChangeInput}
                    className={`placeholder:opacity-70`}
                  />
                  {showPassword ? (
                    <Eye
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <EyeOff
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </Field>
              <Field>
                <Button type="submit" className={`cursor-pointer`}>
                  {isLoadingCredentials ? <Spinner></Spinner> : "Login"}
                </Button>
                <div className="space-y-5 mt-5">
                  <p>Because this uses external resources, please log in</p>
                  <ul className="list-decimal pl-5 space-y-1">
                    <li>
                      <strong>emilys</strong> and
                      password <strong>emilyspass</strong>
                    </li>
                    <li>
                      <strong>michaelw</strong> and
                      password <strong>michaelwpass</strong>
                    </li>
                  </ul>
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
