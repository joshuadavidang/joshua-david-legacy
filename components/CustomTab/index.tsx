import React, { useState } from 'react';
import { InternshipExperience } from '@/data/internship';
import PigeonLab from '@/images/Internship/PigeonLab.png';
import vibefam from '@/images/Internship/vibefam.png';
import Image from 'next/image';
import {
  Avatar,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';

const CustomTab = () => {
  const { colorMode } = useColorMode();
  const firstTask: string[] = InternshipExperience[0].tasks;
  const [data, setData] = useState<string[]>(firstTask);
  const [showTask, setShowTask] = useState<Boolean>(true);
  const [selectedId, setSelectedId] = useState<any>(0);

  const toggleInternship = (index: any, tasks: string[]) => {
    if (selectedId === index) {
      return;
    } else {
      setShowTask(true);
      setSelectedId(index);
      setData(tasks);
    }
  };

  return (
    <div className="px-24 flex flex-row gap-x-32 pt-6">
      <div className="flex flex-col gap-y-8">
        {InternshipExperience.map(({ id, company, date, tasks }, index) => {
          let imageToShow = null;
          if (company === 'vibefam Singapore') {
            imageToShow = vibefam;
          } else if (company === 'Pigeonhole Live (PigeonLab)') {
            imageToShow = PigeonLab;
          }
          return (
            <div
              className={`${
                selectedId === index
                  ? colorMode === 'dark'
                    ? 'bg-purple'
                    : 'bg-purple text-white'
                  : ''
              } flex flex-row gap-6 items-center cursor-pointer rounded-lg px-10 py-4`}
              key={id}
              onClick={() => toggleInternship(index, tasks)}
            >
              <div>
                {imageToShow ? (
                  <Image src={imageToShow} width="40" alt={company} />
                ) : (
                  <Avatar />
                )}
              </div>

              <div>
                <p className="text-md">Software Engineer Intern</p>
                <p className="text-sm py-1">{company}</p>
                <p className="text-xs opacity-80">{date}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[500px]">
        {showTask && (
          <div>
            {data &&
              data.map((task: any, i: number) => (
                <UnorderedList key={i} spacing={2} pt={3}>
                  <ListItem>{task}</ListItem>
                </UnorderedList>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTab;
