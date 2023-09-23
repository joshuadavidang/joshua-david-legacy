import React, { useState } from 'react';
import { InternshipExperience } from '@/data/internship';
import PigeonLab from '@/images/Internship/PigeonLab.png';
import GovTech from '@/images/Internship/GovTech.png';
import Image from 'next/image';
import {
  Avatar,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';
import { BsCodeSlash } from 'react-icons/bs';

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
          if (company === 'GovTech Singapore') {
            imageToShow = GovTech;
          } else if (company === 'Pigeonhole Live (PigeonLab)') {
            imageToShow = PigeonLab;
          }
          return (
            <div
              className={`${
                selectedId === index
                  ? colorMode === 'dark'
                    ? 'bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600'
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
                  <Avatar icon={<BsCodeSlash />} />
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
              data.map((task: any, index: number) => (
                <UnorderedList key={index} spacing={2} pt={3}>
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
