import React from 'react'
import { useContext } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import PersonalDetailsPreview from './preview/personaldetailspreview';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';
function ResumePreview() {
    const {resumeInfo ,setResumeInfo}=useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {/**personal details */}
        <PersonalDetailsPreview resumeInfo={resumeInfo} />
        {/**summary */}
        <SummaryPreview resumeInfo={resumeInfo} />
        {/**experience */}
        <ExperiencePreview resumeInfo={resumeInfo} />
        {/**educational */}
        <EducationalPreview resumeInfo={resumeInfo} />
        {/**skills */}
        <SkillsPreview resumeInfo={resumeInfo} />

    </div>
  )
}

export default ResumePreview