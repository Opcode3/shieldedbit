import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Tab from "../../components/dashboard/tab";
import Request from "../../helper/request";
import { useState } from "react";

export default function Users() {

  const request = new Request();
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
              tabIndex == 0 ? <div>Individuals { request.post('url', '30') }</div> :
                tabIndex == 1 ? <div>Cooporate Organizations { request.post('url', '30') }</div> :
                  tabIndex == 2 ? <div>Partners { request.post('url', '30') }</div> :
                    <div>Tutors { request.get('url', '30') }</div>
            }
          </Tab>
        </Layout>
    </>
  )
}
