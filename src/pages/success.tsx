import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { motion as m } from 'framer-motion';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function Success() {
    const [pieces, setPieces]= useState(200);
    const router = useRouter();
    const formData = router.query.data ? JSON.parse(router.query.data as string) : '';

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000)
    }

    useEffect(() => {
        stopConfetti();
    }, [])
    
    return (
        <Layout>
            <m.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">Thanks {formData.name} for filling the form.
                </h1>
                <p className="text-lg text-gray-500">
                    we have recorded your information. We will response soon too your {formData.email}. cheers!
                </p>
                <Confetti gravity={0.2} numberOfPieces={pieces} />
            </m.div> 
        </Layout>
        )

    
}