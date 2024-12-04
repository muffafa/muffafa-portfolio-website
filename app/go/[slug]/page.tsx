import { redirects } from "@/lib/redirects";
import Redirect from "@/components/redirect";
import { notFound } from "next/navigation";

interface RedirectPageProps {
  params: {
    slug: string;
  };
}

export default function RedirectPage({ params: { slug } }: RedirectPageProps) {
  const destination = redirects[slug];

  if (!destination) {
    notFound();
  }

  return <Redirect to={destination} />;
} 