module.exports = {
	prefix: '$',
	name: 'GamersKingdom',
	presences: [
		{
			activity: 'with people',
			type: 'PLAYING'
		},
		{
			activity: 'with tickets',
			type: 'PLAYING'
		},
		{
			activity: 'for new tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | $help',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,
	guild: '814394606690107393', // ID of your guild (REQUIRED)
	staff_role: '822023421319446528', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '822038367596052490', // ID of your tickets category (REQUIRED)
		send_img: false,
		ping: 'here',
		text: `Hello, {{ tag }}!
		A member of support team will assist you as long as possible.
		In the mean time, please describe your issue in as much detail as possible!`,
		pin: false,
		max: 3,
		default_topic: {
			command: 'Topic Not Mentioned',
			panel: 'Created via panel'
		}
	},

	commands: {
		close: {
			confirmation: false,
			send_transcripts: false
		},
		delete: {
			confirmation: false
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '822025637958385665' // ID of your archives channel
	},

	panel: {
		title: 'Support Tickets',
		description: 'Need help? React to this panel to create a new support ticket so our Support Team can assist you.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 180
		},
		discord: {
			enabled: true,
			channel: '822025637958385665' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
