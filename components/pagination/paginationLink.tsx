import Link from 'next/link';
import { useRouter } from 'next/router';

interface PaginationButtonProps {
  pageNumber: number | null;
  state: 'active' | 'current' | null;
  text: string;
}
export default function PaginationLink(
  { pageNumber, state, text }: PaginationButtonProps,
) {
  const router = useRouter();
  return (
    <Link href={pageNumber ? `/page/${pageNumber}` : router.pathname}>
      <a
        href={pageNumber ? `/page/${pageNumber}` : undefined}
        className={`w-max px-5 py-2 border text-base 
        ${text === 'Previous' && 'rounded-l-xl'} 
        ${text === 'Next' && 'rounded-r-xl'}
        bg-white ${state !== null && 'hover:bg-gray-100'} text-center ${state === null && 'text-gray-300'} ${state === 'current' && 'text-base text-indigo-500'} ${state === 'active' && 'text-base text-gray-600'}`}
      >
        {text}
      </a>
    </Link>
  );
}
