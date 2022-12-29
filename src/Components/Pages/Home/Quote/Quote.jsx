import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import useFetch from '../../../CustomHooks/useFetch';

const Quote = () => {
    const data = useFetch("http://api.quotable.io/random");
    console.log(data);
    if (data === 'loading') {
        return <progress className="progress progress-accent w-56"></progress>
    }
    return (
        <div className='bg-base-200 '>
            <AnimationOnScroll animateIn="animate__bounceIn" animateOut='animate__bounceIn'>
                <h1 className="text-5xl text-center py-6 font-bold text-accent">Important Notice </h1>
            </AnimationOnScroll>
            <div className="card w-1/2 m-auto glass">
                <div className="card-body">
                    {
                        data === "error" ?
                            < h2 className="card-title mb-8">No Message</h2> :
                            <>
                                <h2 className="card-title mb-8">{data?.content}</h2>
                                <p>{data?.author}</p>
                                <div className="card-actions justify-end">
                                    <h5 className='text-md'>Published Date: {data?.dateAdded}</h5>
                                    <h5 className='text-md'>Modified Date: {data?.dateAdded}</h5>
                                </div>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Quote;