import CustomLink from '../../atoms/customLink/customLink';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
	return (
		<div className='flex items-center justify-between border-t-2 border-t-zinc-950 p-4 dark:border-t-zinc-100'>
			<p>
				Made by{' '}
				<CustomLink
					to={'https://portfolio-jknezevic.vercel.app'}
					target='_blank'
				>
					Jakov Knezevic
				</CustomLink>
			</p>
			<div className='flex items-center gap-4'>
				<CustomLink
					to='https://www.linkedin.com/in/jknezevic1712'
					target='_blank'
				>
					<span className='text-2xl text-blue-600'>
						<BsLinkedin />
					</span>
				</CustomLink>
				<CustomLink to='https://github.com/jknezevic1712' target='_blank'>
					<span className='text-2xl text-zinc-100'>
						<BsGithub />
					</span>
				</CustomLink>
				<CustomLink to='mailto:knezevic.jakov@gmail.com'>
					<span className='text-2xl text-red-600'>
						<AiOutlineMail />
					</span>
				</CustomLink>
			</div>
		</div>
	);
}
