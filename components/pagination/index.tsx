import PaginationLink from './paginationLink';

export interface PaginationProps {
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  nextPages: number[] | null;
  previousPages: number[] | null;
  totalPages: number;
}

export default function Pagination(
  {
    currentPage, previousPage, nextPage, nextPages, previousPages, totalPages,
  }: PaginationProps,
) {
  return (
    <div>
      <div className='flex items-center'>
        <PaginationLink pageNumber={previousPage} state={previousPage ? 'active' : null} text='Previous' />
        {
        previousPages && previousPages.map((page) => (
          <PaginationLink key={page} pageNumber={page} state='active' text={String(page)} />
        ))
      }
        {
        nextPages && nextPages.map((page) => (
          <PaginationLink key={page} pageNumber={page} state={page === currentPage ? 'current' : 'active'} text={String(page)} />
        ))
      }
        <PaginationLink pageNumber={nextPage} state={nextPage ? 'active' : null} text='Next' />
      </div>
      <p className='text-center py-5 text-gray-500 text-sm'>
        Total pages:
        {' '}
        {totalPages}
      </p>
    </div>
  );
}
