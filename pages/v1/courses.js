import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Tab from "../../components/dashboard/tab";
import Request from "../../helper/request";
import { useState } from "react";

export default function Courses() {

  const request = new Request();
  const [tabIndex, setTabIndex] =  useState(1);

  const tab_data = [
    {
      text: 'Add Course',
      tabIndex: tabIndex == 1,
      setTabIndex: () => setTabIndex(1)
    },
    {
      text: 'View Courses',
      tabIndex: tabIndex == 0,
      setTabIndex: () => setTabIndex(0)
    }
  ]
  
  return (
      <>
        <Head>
            <title> Manage Courses - ShieldedBit</title>
        </Head>
        <Layout>
          <Tab items={tab_data}>
              {
                tabIndex == 0 ? <div>courses { request.post('url', '30') }</div>
                : <div>courses { request.get('url', '30') }</div>
              }
          </Tab>
        </Layout>
      </>
  )
}
