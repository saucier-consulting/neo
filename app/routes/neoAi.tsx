import type { Route } from "./+types/home";
import { Layout } from "~/components/Layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Neo AI" }];
}

export default function Home() {
  return (
    <Layout>
      <h1 className='text-2xl font-bold text-gray-900'>Neo AI</h1>
    </Layout>
  );
}
