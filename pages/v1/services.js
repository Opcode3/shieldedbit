import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Tab from "../../components/dashboard/tab";
import Request from "../../helper/request";
import { useState } from "react";

export default function Services() {
  const [tabIndex, setTabIndex] =  useState(1);

  const tab_data = [
    {
      text: 'Add Service',
      tabIndex: tabIndex == 1,
      setTabIndex: () => setTabIndex(1)
    },
    {
      text: 'View Service',
      tabIndex: tabIndex == 0,
      setTabIndex: () => setTabIndex(0)
    }
  ]


  return (
      <>
        <Head>
            <title> Manage Services - ShieldedBit</title>
        </Head>
        <Layout>

          <Tab items={tab_data}>

            {
              tabIndex == 0 ? <div>view services </div>
              : <div>add services</div>
            }
          </Tab>
        </Layout>
      </>
  )
}
