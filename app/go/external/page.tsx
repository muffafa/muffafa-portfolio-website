import { redirect } from 'next/navigation';
import Redirect from '@/components/redirect';

export default function ExternalRedirectPage({
  searchParams,
}: {
  searchParams: { url: string };
}) {
  const { url } = searchParams;
  
  if (!url) {
    redirect('/');
  }

  return <Redirect to={url} />;
} 