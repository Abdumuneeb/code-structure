import SharedLayout from "../components/Layout/sharedLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
  return <SharedLayout>{children}</SharedLayout>
}

