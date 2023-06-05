import { Metadata } from "next";

const sharedMetadata: Metadata = {
	title: 'League of Legends Champions Data',
	description: 'Browse between all League of Legends Champions, learn their story, know their skins and their powers!',
	themeColor: 'blue',
	authors: [
		{
			name: 'Alan Xavier Benavides Benavides',
			url: 'https://github.com/Kykal',
		},
	],
	twitter: {
		title: 'League of Legends Champions Data',
		description: 'Browse between all League of Legends Champions, learn their story, know their skins and their powers!',
		card: 'summary_large_image',
		creator: 'Alan Xavier Benavides Benavides',
		images: [
			{
				url: 'https://cdn.discordapp.com/attachments/1108652554507780156/1115376589866287104/image.png',
				secureUrl: 'https://cdn.discordapp.com/attachments/1108652554507780156/1115376589866287104/image.png',
			},
		],
	},
	openGraph: {
		type: 'website',
		url: 'https://league-of-legends-champions-data.vercel.app/',
		title: 'League of Legends Champions Data',
		description: 'Browse between all League of Legends Champions, learn their story, know their skins and their powers!',
		siteName: 'League of Legends Champions Data',
		images: [
			{
				url: 'https://cdn.discordapp.com/attachments/1108652554507780156/1115376589866287104/image.png',
				secureUrl: 'https://cdn.discordapp.com/attachments/1108652554507780156/1115376589866287104/image.png',
			},
		],
	},
}

export default sharedMetadata;
