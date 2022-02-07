import React from 'react'
import { SearchOutlined, FileDoneOutlined, CheckCircleOutlined } from '@ant-design/icons'

import NavBar from '../NavBar/NavBar'
import MainBanner from '../Banners/MainBanner'
import TripleColumn from '../Sections/TripleColumn'
import ImageWithContent1 from '../Sections/ImageWithContent1'

import TopBanner1 from '../../Images/jobmonster-top.png'
import jobmonsterimage1 from '../../Images/person_with_laptop.png'

const Home = props =>
{
    return (
        <React.Fragment>
            <NavBar />
            <MainBanner background={TopBanner1} title="Jobs in Pakistan" button={true} button_url="/jobs" button_text="Search Jobs" icon={SearchOutlined} />
            <TripleColumn heading="Dream job anywhere in Pakistan"
            subheading="We have an aim to help motivated and talaneted stars of Pakistan to find their dream job with in Pakistan."
            icon1={SearchOutlined} title1="Search" description1="Find from a vast variety of latest jobs on our website within Pakistan."
            icon2={FileDoneOutlined} title2="Apply" description2="If the advertisement is hosted by JobMonster it self then you can easily apply for that job through our Portal."
            icon3={CheckCircleOutlined} title3="Get Hired" description3="Win your dream job by completing the hiring process of recruter and start your new career."
            /> 
            <ImageWithContent1 title="What's in JobMonster?" 
            description="When you are searching for a job in Pakistan, you don't have many platforms that can help you 
            to choose between a variety of jobs. Or if you are a recruiter then it is not easy to advertise and find the 
            right candidate for your vacant position. jobMonster has an aim to provide all in one solution."
            image={jobmonsterimage1} />
        </React.Fragment>
    );
}

export default Home