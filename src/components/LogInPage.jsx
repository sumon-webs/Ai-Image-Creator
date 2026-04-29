"use client";

import { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";

export function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Sign up success")
        }
        if (error) {
            toast.warning(error.message)
        }
    };

    return (
        <div className="shadow-xl p-8 rounded-2xl bg-white">

            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-6">
                Please Login
            </h1>

            <Form className="flex w-96 flex-col gap-5 pb-3" onSubmit={onSubmit}>

                {/* Email */}
                <TextField name="email" type="email" isRequired>
                    <Label className="text-sm font-medium">Email</Label>
                    <Input placeholder="Enter your email" className="w-full" />
                    <FieldError className="text-red-500 text-xs" />
                </TextField>

                {/* Password */}
                <TextField name="password" isRequired>
                    <Label className="text-sm font-medium">Password</Label>

                    <div className="relative">
                        <Input
                            className="w-full pr-10"
                            type={isVisible ? "text" : "password"}
                            placeholder="Enter password"
                        />

                        <button
                            type="button"
                            onClick={() => setIsVisible(!isVisible)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                        >
                            {isVisible ? <Eye size={18} /> : <EyeSlash size={18} />}
                        </button>
                    </div>

                    <FieldError className="text-red-500 text-xs" />
                </TextField>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <Button
                        type="submit"
                        className="flex-1 bg-black text-white hover:bg-gray-800"
                    >
                        <Check className="mr-1" />
                        Login
                    </Button>

                    <Button
                        type="reset"
                        variant="secondary"
                        className="flex-1"
                    >
                        Reset
                    </Button>
                </div>
            </Form>
            <div className=" text-center underline py-3 text-blue-600 border-t">
                <Link href="/auth/sign-up">
                    Create a account
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;