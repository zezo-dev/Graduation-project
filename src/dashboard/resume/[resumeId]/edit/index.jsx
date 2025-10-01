
import React, { useEffect, useState } from 'react'
import FormSection from '../../components/FormSection'
import ResumePreview from '../../components/ResumePreview'
import { useParams } from 'react-router-dom'
import dummy from '@/data/dummy';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';

function EditResume() {

    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState();
    useEffect(() => {
        setResumeInfo(dummy);
    }, [])

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/**form secion */}
            <FormSection />
            {/**preview section */}
            <ResumePreview />
        </div>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume