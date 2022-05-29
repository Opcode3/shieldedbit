import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import Request from "../../helper/request";

export default function Support() {

  const request = new Request();

  return (
      <>
      <Head>
        <title> Manage Requests - ShieldedBit</title>
      </Head>
        <Layout>

            { <div>support { request.get('url', '30') }</div>}
            
        </Layout>
      </>
  )
}
