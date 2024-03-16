import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useUser = (userdId: string) => {
	const { data, error, isLoading, mutate } = useSWR(
		userdId ? `/api/users/${userdId}` : null,
		fetcher
	)
	return { data, error, isLoading, mutate }
}

export default useUser
