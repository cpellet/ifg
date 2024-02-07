import Image from "next/image";
import { BriefcaseIcon, PresentationChartBarIcon, UserGroupIcon } from '@heroicons/react/20/solid';


const items = [
    {
        name: 'Stock Pitches',
        description:
            'In teams of 4-5 students, our dedicated participants will be working on an analysis of their chosen company in a 5-week horizon. The process will give these students a better understanding of how to prepare a pitch with the help of professionals and ISG’s resources. Additionally, participants will be able to develop their presentation skills by showing their findings in front of the whole team.',
        icon: PresentationChartBarIcon,
    },
    {
        name: 'General Meetings',
        description:
            'We host a general meeting every Tuesday for all of our members, where we would showcase the current findings of all research teams. You will get a briefing about the most relevant recent news and M&A activity from the Industry Research teams and a rundown of the current stage of valuation that the Stock Pitch teams have been working on. Each week, we will have guest speakers with exposure from the industry talking about their personal experiences or giving workshops on specific topics, including financial modelling, financial accounting, industry analysis, etc.',
        icon: UserGroupIcon,
    },
    {
        name: 'Industry Research',
        description:
            'Our research teams will cover the most relevant news and M&A activity in the specific industry of their choice. Each team will have a chance to present their findings at our General Meetings, to not only practice their presentation skills but to educate our members about the current trends in the market.',
        icon: BriefcaseIcon,
    },
]

export default function About() {
    return (
        <div className="bg-white pt-3" id="about-section">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:mx-0 flex flex-col md:flex-row md:justify-between items-center md:gap-x-12">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5 md:mt-0">About us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            IFG is a group of ambitious students with enthusiasm for the financial services industry. We encourage you to join our team if you would like to learn more about the industry or practice your skills as a part of our stock pitch or industry research teams.
                        </p>
                    </div>
                    <Image src="/img1.jpg" alt="" className="my-12 rounded-lg" width={220} height={220} />
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">What we do</h2>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {items.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}