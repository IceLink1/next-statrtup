import MainLayout from "@/components/MainLayout";
import Head from "next/head";

export const metadata = {
  title: "ICELINK | Home",
};

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>ICLEINK | Home</title>
      </Head>
      <div className="pt-16">Home</div>
    </MainLayout>
  );
}
