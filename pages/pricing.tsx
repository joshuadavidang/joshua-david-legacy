import React from 'react';
import { Box, Tag, useColorMode } from '@chakra-ui/react';
import Card from '@/components/Card/Card';
import { FcApproval } from 'react-icons/fc';
import CardHeader from '@/components/Card/CardHeader';
import { PricingPlanData } from '@/data/pricingPlans';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import CardFooter from '@/components/Card/CardFooter';
import Link from 'next/link';
import Head from 'next/head';
import { PRICING_HEADER } from '../constants';

export default function Pricing() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Pricing - Joshua David</title>
      </Head>
      <Box className="flex flex-col justify-center items-center w-screen py-16 md:py-32 text-center">
        <h1 className="md:pt-0 pt-12 pb-9 md:text-3xl text-2xl md:max-w-none max-w-sm ">
          {PRICING_HEADER}
        </h1>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-14">
          {PricingPlanData.map(
            ({ id, currency, price, tier, features, link, callToAction }) => (
              <Card
                key={id}
                borderRadius="25px"
                minW={{ base: 'xs', md: 'md', lg: 'xs' }}
                align="center"
                className="py-3 justify-evenly transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <Box className="py-4">
                  {tier === 'Pro' ? (
                    <Tag size="md" colorScheme="red" variant="solid">
                      Most Popular
                    </Tag>
                  ) : (
                    <Tag size="md" variant="ghost" />
                  )}
                </Box>

                <CardHeader
                  fontSize="2xl"
                  className="flex flex-col flex-grow"
                  padding="0"
                >
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

                <CardFooter pt="10">
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
    </>
  );
}
