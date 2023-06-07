import React from 'react';
import { Box, Tag, useColorMode } from '@chakra-ui/react';
import Text from '@/components/Text/Text';
import { HIRING_HEADER } from '@/constants/index';
import Card from '@/components/Card/Card';
import { FcApproval } from 'react-icons/fc';
import CardHeader from '@/components/Card/CardHeader';
import { PricingPlanData } from '@/data/pricingPlans';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import CardFooter from '@/components/Card/CardFooter';
import Link from 'next/link';

export default function Pricing() {
  const { colorMode } = useColorMode();

  return (
    <Box className="flex flex-col justify-center items-center w-screen py-16 md:py-32 text-center">
      <Text
        fontSize={{ base: '20px', md: '30px', lg: '30px' }}
        color="brand.purple"
        className="py-12 md:pt-0"
      >
        {HIRING_HEADER}
      </Text>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {PricingPlanData.map(
          ({ id, currency, price, tier, features, link, callToAction }) => (
            <Card
              key={id}
              borderRadius="25px"
              minW={{ base: 'xs', md: 'md', lg: 'sm' }}
              align="center"
              className="py-3 justify-evenly transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <Box className="pt-6">
                {tier === 'Pro' ? (
                  <Tag size="md" colorScheme="red" variant="solid">
                    Most Popular
                  </Tag>
                ) : (
                  <Tag size="md" variant="ghost" />
                )}
              </Box>

              <CardHeader fontSize="2xl" className="flex flex-col flex-grow">
                <h2 className="text-purple">{tier}</h2>

                <div className="flex flex-row items-center justify-center py-4 gap-3">
                  <p className="text-sm">{currency}</p>

                  <h1
                    className={`${
                      colorMode === 'dark' ? 'text-white' : 'text-black'
                    } text-4xl`}
                  >
                    {price}
                  </h1>
                </div>

                <div className="list-none text-sm text-left">
                  {features.map((feature, i) => {
                    return (
                      <ButtonIcon
                        key={i}
                        size="sm"
                        colorScheme="gray"
                        variant="ghost"
                        className="cursor-default"
                        leftIcon={<FcApproval />}
                      >
                        {feature}
                      </ButtonIcon>
                    );
                  })}
                </div>
              </CardHeader>

              <CardFooter>
                <Link href={link} target="_blank">
                  <ButtonIcon
                    size="md"
                    colorScheme={colorMode == 'dark' ? 'gray' : 'telegram'}
                    variant="solid"
                  >
                    {callToAction}
                  </ButtonIcon>
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </Box>
  );
}
