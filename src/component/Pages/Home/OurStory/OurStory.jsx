import React from 'react';
import storyImage from '../../../../assets/story.jpg';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const OurStory = () => {
    return (
        <div>
            <SectionTitle Title="Our Story" TitleDetails="Our Story will make history" ></SectionTitle>
            <div className='md:grid grid-cols-2 gap-8 my-8 sm:mx-3'>

                <div>
                    <img src={storyImage} alt="" />

                </div>

                <div className='space-y-3'>
                    <h3 className='text-2xl font-semibold'>Warriors Youth Sports</h3>
                    <p className='text-base'>Warriors Youth Sports has provided elementary-aged children with a hands-on, experiential education. Since the 1950s, children from 3 to 15 have had fun-filled, educational and nurturing summers at the school’s day camp . <br></br>The campus’ five buildings are spacious and designed to bring the outdoors. SRV summer camp is heavy on outdoor fun.The creek naturally cool the campus, but on especially hot days.Children engage in a wide choice a wide choice of activities, such as art, sports, hiking, cooking, archery, drama, dance, swimming, and more. No matter your child’s age, SRV Camp provides a perfect environment for making friends, exploring and growing.</p>
                </div>

            </div>
        </div>
    );
};

export default OurStory;