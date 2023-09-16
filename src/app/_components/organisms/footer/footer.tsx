import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import CustomLink from '../../atoms/customLink/customLink';
import Logo from '../../atoms/logo/logo';

export default function Footer() {
	return (
		<footer className='footer footer-center p-10'>
			<aside>
				<Logo className='text-4xl lg:text-5xl' />
				<p className='footer-title opacity-100'>
					Made by{' '}
					<CustomLink
						to={'https://portfolio-jknezevic.vercel.app'}
						target='_blank'
					>
						Jakov Knezevic
					</CustomLink>
				</p>
			</aside>
			<nav>
				<header className='footer-title opacity-100'>Social</header>
				<div className='flex items-center gap-4'>
					<CustomLink
						to='https://www.linkedin.com/in/jknezevic1712'
						target='_blank'
					>
						<span className='text-2xl text-blue-600 lg:text-3xl'>
							<BsLinkedin />
						</span>
					</CustomLink>
					<CustomLink to='https://github.com/jknezevic1712' target='_blank'>
						<span className='text-2xl text-zinc-100 lg:text-3xl'>
							<BsGithub />
						</span>
					</CustomLink>
					<CustomLink to='mailto:knezevic.jakov@gmail.com'>
						<span className='text-2xl text-red-600 lg:text-3xl'>
							<AiOutlineMail />
						</span>
					</CustomLink>
				</div>
			</nav>
		</footer>
	);
}
