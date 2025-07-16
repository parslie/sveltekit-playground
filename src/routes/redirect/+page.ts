import { base } from '$service-worker';
import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, `${base}/inputs`);
}
