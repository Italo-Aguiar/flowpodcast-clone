import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ActiveLinkProps {
  href: string
  as?: string
}

const ActiveLink: NextPage<ActiveLinkProps> = ({ children, href, ...props }) => {
  const { asPath } = useRouter();
  const className = asPath === href || asPath === props?.as 
    ? 'transition duration-200 ease-in-out hover:text-secondary border-b-2 border-secondary text-xs px-11.5 py-4'
    : 'transition duration-200 ease-in-out hover:text-secondary border-b-2 border-black text-xs px-6 py-4'

  return (
    <Link href={href}>
      <a className={className}>{ children }</a>
    </Link>
  );
};

export default ActiveLink