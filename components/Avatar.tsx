import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Image from 'next/image'

interface AvatarProps {
	userId: string
	isLarge?: boolean
	hasBorder?: boolean
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
	const { data: fetchedUser } = useUser(userId)
	const router = useRouter()

	const onClick = useCallback(
		(event: any) => {
			event.stopPropagation()

			const url = `/users/${userId}`

			router.push(url)
		},
		[router, userId]
	)

	return (
		<div
			className={`
				${hasBorder ? 'border-4 border-black' : ''}
				${isLarge ? 'w-32' : 'h-12'}
				${isLarge ? 'h-32' : 'w-12'}
				rounded-full 
				hover:opacity-90 
				transition 
				cursor-pointer 
				relative
			`}
		>
			<Image
				fill
				className='object-cover rounded-full'
				alt='Avatar'
				onClick={onClick}
				src={fetchedUser?.profileImage || '/images/placeholder.png'}
			/>
		</div>
	)
}

export default Avatar
