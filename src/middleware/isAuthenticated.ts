import { useUser } from '@/composables/auth/user'

export default function isAuthenticated(route) {
	if (!useUser().isLoggedIn.value) {
			return navigateTo('/')
	}
}
