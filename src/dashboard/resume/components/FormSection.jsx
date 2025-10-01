import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PersonalDetail from './forms/PersonalDetail'
import Summary from './forms/summary'
import Experience from './forms/experience.'


function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm' className='gap-2 flex'>Theme</Button>
        <div className='mx-2 flex gap-2'>
          {activeFormIndex > 0 && (
            <Button size='sm' onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className='flex gap-2'
            size='sm'
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {activeFormIndex == 1 ?
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
        : activeFormIndex == 2 ?
          <Summary enabledNext={(v) => setEnableNext(v)} />
          : activeFormIndex == 3 ?
            <Experience />
            : null
      }
    

      {/* Additional form sections will be added here */}
      {/* Experience */}
      {/* Educational Detail */}
      {/* Skills */}
    </div>
  );
}

export default FormSection