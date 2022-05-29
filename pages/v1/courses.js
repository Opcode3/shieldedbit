import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Tab from "../../components/dashboard/tab";

export default function Courses() {
  return (
      <>
        <Head>
            <title> Manage Courses - ShieldedBit</title>
        </Head>
        <Layout>
            <Tab items={[]}>
              <div>courses</div>
            </Tab>
        </Layout>
      </>
  )
}
