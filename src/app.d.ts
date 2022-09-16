// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
		db: Realm.Services.MongoDBDatabase;
	}

	// interface PageData {}

	// interface PageError {}

	// interface Platform {}
}
