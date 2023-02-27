import Layout from '@/components/layout';

export default function BasicForm() {
  return (
    <Layout>
    <h1>Basic React-hook-form example</h1>;
    <form className="bg-white flex rounded-lg">
      <div className='flex-1 p-16'>
        <h3 className='font-bold'>let's begin</h3>
        <p className='text-gray-500 text-sm'>some random text</p>
        <div className='mt-6'>
          {/* Name input field */}
          <div className='pb-4'>
            <label className='block text-sm pb-1' htmlFor="name">Name</label>
            <input type="text"
              className="border border-gray-400 p-1 rounded-md"
              name="name" placeholder='Enter your name here'/>
          </div>
          {/* Email input field */}
          <div className='pb-4'>
            <label className='block text-sm pb-1' htmlFor="email">Email</label>
            <input type="text"
              className="border border-gray-400 p-1 rounded-md"
              name="email" placeholder='Enter your email here'/>
          </div>
          {/* Country input field */}
          <div className='pb-4'>
            <label className='block text-sm pb-1' htmlFor="country">Country</label>
            <select className="border border-gray-400 p-1 rounded-md w-5/6">
              <option value="" disabled selected>select a country</option>
              <option>United kingdom</option>
              <option>India</option>
              <option>Japan</option>
              <option>Korea</option>
            </select>
          </div>
          {/* Terms of service */}
          <div className='pb-4'>
            <label className='block text-sm pb-1' htmlFor="terms">Terms for service</label>
            <div className='flex item-center gap-2'>
              <input type="checkbox" name="terms" value="checked" className='h-5 w-5 text-teal-500'/>
              <p className='text-sm text-gray-500'>I agree with the terms of service</p>
            </div>
          </div>
        </div>
      </div>
    </form>
    </Layout>
  );
};