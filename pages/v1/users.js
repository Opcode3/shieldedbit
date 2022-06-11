import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Tab from "../../components/dashboard/tab";
import { useState } from "react";

export default function Users() {
  const [tabIndex, setTabIndex] =  useState(1);

  const tab_data = [
    {
      text: 'Individuals',
      tabIndex: tabIndex == 0,
      setTabIndex: () => setTabIndex(0)
    },
    {
      text: 'Organizations',
      tabIndex: tabIndex == 1,
      setTabIndex: () => setTabIndex(1)
    },
    {
      text: 'Partners',
      tabIndex: tabIndex == 2,
      setTabIndex: () => setTabIndex(2)
    },
    {
      text: 'Tutors',
      tabIndex: tabIndex == 3,
      setTabIndex: () => setTabIndex(3)
    }
  ]

  return (
    <>
        <Head>
            <title> Manage Users - ShieldedBit</title>
        </Head>
        <Layout>
          <Tab items={tab_data}>

            {
              tabIndex == 0 ? <div>Individuals </div> :
                tabIndex == 1 ? <div>Cooporate Organizations </div> :
                  tabIndex == 2 ? <div>Partners </div> :
                    <div>Tutors </div>
            }
          </Tab>
        </Layout>
    </>
  )
}
