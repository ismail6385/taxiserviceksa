import NotFound, { metadata as notFoundMetadata } from './(main)/not-found';

export const metadata = notFoundMetadata;

export default function RootNotFound() {
  return <NotFound />;
}
