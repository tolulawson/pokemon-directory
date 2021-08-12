export default function BackButton() {
  return (
    <button
      type='button'
      className='py-3 px-8  bg-yellow-500 hover:bg-yellow-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full max-w-max'
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.history.back();
        }
      }}
    >
      Go back
    </button>

  );
}
