import { useEffect, useState } from 'react';
import {classNames} from '../../utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
        setIsVisible(false);
      }
      else {
        setIsVisible(true);
      }
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-0 right-0 mb-3 mr-3'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0 cursor-default',
          'duration-200 transition-all p-3 rounded-full bg-gray-400 hover:bg-gray-500 hover:shadow-xl'
        )}
        disabled={!isVisible}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 10l7-7m0 0l7 7m-7-7v18'
          />
        </svg>
      </button>
    </div>
  );
}
