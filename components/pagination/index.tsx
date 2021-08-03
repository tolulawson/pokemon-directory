import PaginationLink from './paginationLink';

export interface PaginationProps {
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  nextPages: number[] | null;
  previousPages: number[] | null;
}

export default function Pagination(
  {
    currentPage, previousPage, nextPage, nextPages, previousPages,
  }: PaginationProps,
) {
  return (
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
  );
}
