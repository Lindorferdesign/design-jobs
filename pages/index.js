import Head from 'next/head'
import CardTest from '../components/CardTest'
import Header from '../components/Header'
import JobCard from '../components/JobCard'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>

      <div className="Jobs grid grid-cols-3 gap-10 ">
        <JobCard title="User Interface Designer" country="linz"></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
      </div>

    </div>
  )
}
