import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';
import CardHeader from '@/components/Card/CardHeader';
import { PastProjects } from '@/components/Projects';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {PastProjects.map(({ name, description, icon, link }, index) => (
        <Link href={link} target="_blank" key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, ease: 'easeOut' }}
          >
            <Card
              borderRadius="12px"
              maxW="xs"
              minH="xs"
              minW="xs"
              align="center"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300
              "
            >
              <span className="pt-7">
                <Image src={icon} alt="image" width="100" />
              </span>

              <CardHeader fontSize="2xl">{name}</CardHeader>

              <CardBody
                paddingTop="0"
                fontSize={{ base: '14px', md: '15px', lg: '14px' }}
              >
                {description}
              </CardBody>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
