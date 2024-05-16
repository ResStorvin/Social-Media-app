import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignUpValidation } from "@/lib/validation";
import { z } from "zod";

const SignUpForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignUpValidation>>({
      resolver: zodResolver(SignUpValidation),
      defaultValues: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof SignUpValidation>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
  }
  
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/public/assets/images/logo.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> Create a new account </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2"> To use snapgram you have to enter your details </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
export default SignUpForm