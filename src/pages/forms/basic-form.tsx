import Layout from '@/components/layout';
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, NextRouter } from 'next/router';
import { motion as m } from 'framer-motion';

export default function BasicForm() {

  // Router
  const router: NextRouter = useRouter();


  interface IFormInput {
    name: String;
    email: String;
    country: string;
    termsOfService: string;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    router.push({ pathname: '/success', query: { 'data': JSON.stringify(data) } });
  }
  return (
    <Layout>
      <m.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
        <h1>Basic React-hook-form example</h1>;
        <form className="bg-white flex rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-1 p-16'>
            <h3 className='font-bold'>let's begin</h3>
            <p className='text-gray-500 text-sm'>some random text</p>
            <div className='mt-6'>
              {/* Name input field */}
              <div className='pb-4'>
                <label className={`block text-sm pb-1  ${errors.name ? 'text-red-500' : ''}`} htmlFor="name">
                  {errors.name ? errors.name.message : "Name"}
                </label>
                <input type="text" {...register("name", {
                  required: 'This field is required.',
                  minLength: { value: 4, message: 'Name should have minimum 4 characters.' },
                  maxLength: { value: 20, message: 'Name cannot have more than 20 characters.' }
                })}
                  className="border border-gray-400 p-1 rounded-md"
                  name="name" placeholder='Enter your name here' />
              </div>

              {/* Email input field */}
              <div className='pb-4'>
                <label className={`block text-sm pb-1  ${errors.email ? 'text-red-500' : ''}`} htmlFor="email">
                  {errors.email ? errors.email.message : "Email"}
                </label>
                <input type="text" {...register("email", {
                  required: 'This field is required.', pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
                  className="border border-gray-400 p-1 rounded-md"
                  name="email" placeholder='Enter your email here' />
              </div>

              {/* Country input field */}
              <div className='pb-4'>
                <label className={`block text-sm pb-1  ${errors.country ? 'text-red-500' : ''}`} htmlFor="country">
                  {errors.country ? errors.country.message : "Country"}
                </label>
                <select className="border border-gray-400 p-1 rounded-md w-5/6" defaultValue=""
                  {...register("country", { required: 'This field is required.' })}>
                  <option value="" disabled >select a country</option>
                  <option value="United kingdom">United kingdom</option>
                  <option value="India">India</option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">Korea</option>
                </select>
              </div>
              {/* Terms of service */}
              <div className='pb-4'>
                <label className={`block text-sm pb-1  ${errors.termsOfService ? 'text-red-500' : ''}`} htmlFor="terms">
                  {errors.termsOfService ? errors.termsOfService.message : "Terms of service"}
                </label>
                <div className='flex item-center gap-2'>
                  <input type="checkbox" {...register("termsOfService", { required: 'This field is required.' })} className='h-5 w-5 text-teal-500' />
                  <p className='text-sm text-gray-500'>I agree with the terms of service</p>
                </div>
              </div>
              {/* submit button*/}
              <button type="submit" className="text-sm text-white py-3 bg-teal-500 mt-6 rounded-lg w-full">Submit</button>
            </div>
          </div>
        </form>
      </m.div>
    </Layout>
  );
};