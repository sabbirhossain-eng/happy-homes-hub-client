import { IoCallOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";


const ContactUs = () => {
    
    return (
        <div className="bg-green-100 " id="contact">
           <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide text-black">
                    Contact
                </p>
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                    We did love to hear from you! Whether you have questions about pet adoption, need assistance with our platform, or want to share your adoption success story, the Happy Homes Hub team is here to help.
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-light text-white">
                            <IoLocationOutline className="w-full h-[70%]" />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">1207, humayun road, Mohammadpur, Dhaka</p>
                                <p className="text-gray-600 dark:text-slate-400">Dhaka, Bangladesh</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-light text-white">
                            <IoCallOutline className="w-full h-[70%]" />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +880 456-7890</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: sabbirhossain2k10@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-light text-gray-50">
                            <IoTimeOutline className="w-full h-[70%]" />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold ">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name"  placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email"  placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label  className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-primary-light text-white px-6 py-3 font-xl rounded-md sm:mb-0 transition transform hover:scale-110">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
        </div>
    );
};

export default ContactUs;