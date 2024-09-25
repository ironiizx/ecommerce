import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-black text-white py-6 px-10'>
      <div className='container mx-auto text-center'>
        <p className='mb-4'>&copy; {new Date().getFullYear()} Chevrolet. All rights reserved.</p>
        <div className='flex justify-center space-x-6'>
          <Link href="/about" className='font-bold hover:underline transition-all duration-300'>
            About Us
          </Link>
          <Link href="/contact" className='font-bold hover:underline transition-all duration-300'>
            Contact
          </Link>
          <Link href="/privacy" className='font-bold hover:underline transition-all duration-300'>
            Privacy Policy
          </Link>
          <Link href="/terms" className='font-bold hover:underline transition-all duration-300'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
